package backEnd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Properties;
import java.util.Queue;

public class Interpreter {
	private String myLanguage = "English";
	private sLogoValid mySlogoValid;
	private Properties myLanguageProperties;
	private Properties myShortCommands;
	private Controller myController;
	private ModelModifiable myModel;
	private Queue<String> myQueue;
	private static final String[] noParamCommands = {"pu","pd","st","ht","home","cs","xcor","ycor","heading","pendownp","showingp","pi", "pc", "sh", "stamp", "clearstamps", "id", "turtles"};
	private static final String[] oneParamCommands = {"fd", "bk", "lt", "rt", "seth", "random", "sin", "cos", "tan", "atan", "log", "not", "minus", "setbg", "setpc", "setps", "setsh", "setpalette"};
	private static final String[] twoParamCommands = {"towards", "setxy", "sum", "difference", "product", "quotient", "remainder", "pow", "lessp","greaterp", "equal", "notequalp", "and", "set"}; 

	public Interpreter(ModelModifiable m) {
		mySlogoValid = new sLogoValid();
		myModel = m; 
		myController = new Controller(myModel);
		myQueue = new PriorityQueue<String>();
		importLanguageProperties();
	}
	
	public sLogoValid interpret(String s) {
		if(errorCheck(s).getError()) return mySlogoValid;
		//Create Instance Variables
		ArrayList<String> tempArgs = new ArrayList<String>(Arrays.asList(s.trim().split("\\s+")));
		ArrayList<String> args = new ArrayList<String>();
		//Convert all input to shortCodes and replace userDefinedFunctions
		while(!tempArgs.isEmpty()) {
			String tempArg = tempArgs.remove(0);
			if(myLanguageProperties.containsKey(tempArg)) {
				tempArg = myShortCommands.getProperty(myLanguageProperties.getProperty(tempArg));
			}
			//TODO: Add check for user defined commands;
			args.add(tempArg);
		}
		if(!args.isEmpty()) {
		//Check to see if the first argument is valid
		if(!myLanguageProperties.containsKey(args.get(0))) { return new sLogoValid(false, "Invalid Command: " + args.get(0));}
		//Check for advanced syntax
		switch(args.get(0)) {
		case "repeat":
			mySlogoValid =  interpretRepeat(args);
			break;
		case "if":
		case "ifelse":
			mySlogoValid = interpretBoolean(args);
			break;
		case "for":
		case "dotimes":
			mySlogoValid = interpretVarLoop(args);
		default:
			mySlogoValid = interpretBasic(args);
		}
		//Check to see if an error already occurred
		if(mySlogoValid.getError()) {return mySlogoValid;}
		//Perform the next operation in the queue
		if(!myQueue.isEmpty()) {mySlogoValid = interpret(myQueue.remove());}
		}
		return mySlogoValid;
	}
	
	/**
	 * 
	 * @param s
	 * @return
	 */
	private sLogoValid passToController(String s) {
		if(s.split(" ").length > 1) {
			String[] args = s.split(" ", 2);
			return myController.create(args[0], args[1]);
		} else {
			return myController.create(s, "");
		}
	}
	/**
	 * 
	 * @param args
	 * @return
	 */
	private sLogoValid interpretBasic(ArrayList<String> args) {
		//Create input/output arraylists
		ArrayList<String> myInputArgs = args;
		ArrayList<String> myCommandArr = new ArrayList<String>();
		//Get the expected number of arguments
		int expectedLength = getCommandSyntaxLength(myInputArgs.get(0));
		if(expectedLength < 1) return new sLogoValid(true, "Syntax not found: " + args.get(0));
		//Move the initial command from input to output
		myCommandArr.add(myInputArgs.remove(0));
		//Handle everything after the initial command
		while(myCommandArr.size() < expectedLength) {
			//move the argument from output array to local variable
			String tempArg = myInputArgs.remove(0);
			//Check if the value is a double or a variable pathed to a double
			if(!doubleCheck(tempArg).getError()) {myCommandArr.add(doubleCheck(tempArg).getMyStringValue());}
			//Check if the syntax match with defining a variable 
			if(myCommandArr.contains("set") && tempArg.contains(":")) {myCommandArr.add(tempArg);}
			//TODO: implement the same thing for user defined commands
			//Check if the value is another command
			else if(myLanguageProperties.containsKey(tempArg)) { //TODO: Add check for user defined commands
				int myInternalSyntaxLength = getCommandSyntaxLength(tempArg);
				ArrayList<String> internalCommandArray = new ArrayList<String>();
				internalCommandArray.add(tempArg);
				//Check if there is a second internal command
				while(internalCommandArray.size() < myInternalSyntaxLength) {
					String internalTempArg = myInputArgs.remove(0);
					if(myLanguageProperties.containsKey(internalTempArg)) { //TODO: Add check for user defined commands
						myInternalSyntaxLength += getCommandSyntaxLength(internalTempArg) -1;
					}
					internalCommandArray.add(internalTempArg);
				}
				//interpret the internalCommand
				mySlogoValid = interpret(standardString(internalCommandArray));
				//Check if there has been an error
				if(mySlogoValid.getError()) {return mySlogoValid;}
				//Add the result of the internal command to the array
				myCommandArr.add(doubleCheck(mySlogoValid.getMyStringValue()).getMyStringValue());
			}
		}
		mySlogoValid = passToController(standardString(myCommandArr));
		if(!myInputArgs.isEmpty())myQueue.add(standardString(myInputArgs));
		return mySlogoValid;
	}

	private sLogoValid doubleCheck(String tempArg) {
		sLogoValid tempSlogoValid = new sLogoValid();
		String arg = tempArg.trim();
		try {
			tempSlogoValid.setMyDoubleValue(Double.parseDouble(arg));
			return tempSlogoValid;
		} catch(Exception e) {
			//Nada, it's just not a double;
		}
		try {
			tempSlogoValid = myModel.getVariable(arg);
			if(tempSlogoValid.getError()) {return tempSlogoValid;}
			tempSlogoValid.setMyDoubleValue(tempSlogoValid.getMyDoubleValue());
			return tempSlogoValid;
		} catch (Exception e) {
			tempSlogoValid.setMyStringValue("Variable not defined: " + tempArg);
		}
		tempSlogoValid.setError(true);
		return tempSlogoValid;
		
		
	}

	private int getCommandSyntaxLength(String myCommand) {
				for(String k : noParamCommands) { if(myCommand.equals(k)) return 1;}
				for(String k : oneParamCommands) { if(myCommand.equals(k)) return 2;}
				for(String k : twoParamCommands) { if(myCommand.equals(k))  return 3;}
				if("MakeUserInstruction".equals(myCommand))  return 8;
				if("Tell".equals(myCommand)) return 4;
				if("Ask".equals(myCommand) || "AskWith".equals(myCommand))  return 7;
				return -1;
				
	}

	private sLogoValid interpretVarLoop(ArrayList<String> args) {
		// TODO Auto-generated method stub
		return null;
	}

	private sLogoValid interpretBoolean(ArrayList<String> args) {
		// TODO Auto-generated method stub
		return null;
	}

	private sLogoValid interpretRepeat(ArrayList<String> args) {
		//Setup Instance Variables
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = (ArrayList<String>) args.clone();
		//remove repeat
		myInputArgs.remove(0);
		int myTimes = 0;
		//Parse arguments before list
		String myNum = "";
		int count = 0;
		while(!myInputArgs.get(0).equals("[")) {
			myNum += myInputArgs.remove(0) + " ";
			count++;
		}
		myInputArgs.remove(0);
		//if there is more than one argument, interpret them
		if(count > 1 ) {myNum = interpret(myNum).getMyStringValue();}
		//Check for valid loop numbers
		tempSlogoValid = doubleCheck(myNum.trim());
		if(tempSlogoValid.getError()) return tempSlogoValid;
		myTimes = (int) tempSlogoValid.getMyDoubleValue();
		//Parse out the commands
		String myCommands = "";
		int internalLoopCount = 0;
		while(true) {
			if(internalLoopCount == 0 && myInputArgs.get(0).equals("]")) {
				myInputArgs.remove(0);
				break;
			}
			if(myInputArgs.get(0).equals("[")) { internalLoopCount += 1; }
			if(myInputArgs.get(0).equals("]")) { internalLoopCount -= 1; }
			myCommands += myInputArgs.remove(0) + " ";
		}
		//Loop time
		for(int i = 0; i < myTimes; i++) {
			tempSlogoValid = interpret(myCommands);
			if(tempSlogoValid.getError()) {
				return tempSlogoValid;
			}
		}
		if(!myInputArgs.isEmpty()) {
			myQueue.add(standardString(myInputArgs));
		}
		return tempSlogoValid;
	}

	private sLogoValid errorCheck(String s) {
		//Check to ensure there are no prior errors
		if(mySlogoValid.getError()) return mySlogoValid;
		//Check to make sure input isn't null
		if(s == null || "".equals(s)) {
			mySlogoValid.setError(true);
			mySlogoValid.setMyStringValue("User input is missing or invalid");
			return mySlogoValid;
		}
		return mySlogoValid;
	}

	/**
	 * Sets the language of the Interpreter.
	 * @param s String of Language to be interpreted
	 */
	public void setLanguage(String s) {
		myLanguage = s;
		//Try to import the language properties
				try {
					myLanguageProperties = new languageParser(myLanguage).getProperties();
				} catch(Exception e) {
					mySlogoValid.setError(true);
					mySlogoValid.setMyStringValue("Error: Can not find " + myLanguage + ".properties");
				}
	}
	
	/**
	 * 
	 */
	private void importLanguageProperties() {
		try {
			myLanguageProperties = new languageParser(myLanguage).getProperties();
			//Import the short commands
			myShortCommands = new Properties();
			myShortCommands.load(getClass().getResourceAsStream("/resources/languages/shortCommands.properties"));
		} catch(Exception e) {
			mySlogoValid.setError(true);
			mySlogoValid.setMyStringValue("Error: Can not find " + myLanguage + ".properties");
		}
		
	}
	
	private String standardString(ArrayList<String> arr) {
		ArrayList<String>myTempArr = (ArrayList<String>) arr.clone();
		String concat = "";
		if(!myTempArr.isEmpty()) {
			while(!myTempArr.isEmpty()) {
				concat += myTempArr.remove(0) + " ";
				}
			}
		return concat;
		}
}
