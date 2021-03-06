package backEnd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
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
	private static final String[] NO_PARAM_COMMANDS = {"pu","pd","st","ht","home","cs","xcor","ycor","heading","pendownp","showingp","pi", "pc", "sh", "stamp", "clearstamps", "id", "turtles", "stamp", "clearstamps"};
	private static final String[] ONE_PARAM_COMMANDS = {"fd", "bk", "lt", "rt", "seth", "random", "sin", "cos", "tan", "atan", "log", "not", "minus", "setbg", "setpc", "setps", "setsh", "setpalette"};
	private static final String[] TWO_PARAM_COMMANDS = {"towards", "setxy", "sum", "difference", "product", "quotient", "remainder", "pow", "lessp","greaterp", "equal", "notequalp", "and", "set"}; 
	
	public Interpreter(ModelModifiable m) {
		mySlogoValid = new sLogoValid();
		myModel = m; 
		myController = new Controller(myModel);
		myQueue = new PriorityQueue<String>();
		importLanguageProperties();
	}
	
	public sLogoValid interpret(String s) {
		if(errorCheck(s).getError()) return errorCheck(s);
		//Create Instance Variables
		ArrayList<String> tempArgs = new ArrayList<String>(Arrays.asList(s.trim().split("\\s+")));
		ArrayList<String> args = new ArrayList<String>();
		//Convert all input to shortCodes and replace userDefinedFunctions
		while(!tempArgs.isEmpty()) {
			String tempArg = tempArgs.remove(0);
			if(myLanguageProperties.containsKey(tempArg)) {
				tempArg = myShortCommands.getProperty(myLanguageProperties.getProperty(tempArg));
			}
			args.add(tempArg);
		}
		if(!args.isEmpty()) {
		//Check to see if there is a user defined command
		if(checkUserDefinedCommand(args.get(0))) {
			mySlogoValid = interpretUserCommand(args);
			if(!myQueue.isEmpty()) { interpret(myQueue.remove());}
			return mySlogoValid;
		}
		//Check to see if the first argument is valid
		if(!myLanguageProperties.containsKey(args.get(0))) { return new sLogoValid(true, "Invalid Command: " + args.get(0));} //TODO: Add a check for userDefined Commands
		switch(args.get(0)) {
		case "tell":
		case "ask":
			mySlogoValid = interpretMultiTurtle(args);
			break;
		case "askWith":
			mySlogoValid = interpretAskWith(args);
			break;
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
			break;
		case "to":
			mySlogoValid = makeUserDefinedComand(args);
			break;
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
	
	private boolean checkUserDefinedCommand(String arg) {
		try {
			sLogoValid tempSlogoValid = myModel.getVariable(arg);
			if(tempSlogoValid.getError()) return false;
			try {
				Double.parseDouble(tempSlogoValid.getMyStringValue());
				return false;
			} catch(Exception e ) {
				return true;
			}
		} catch(Exception e) {
			return false;
		}
	}

	private sLogoValid interpretAskWith(ArrayList<String> args) {
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = args;
		ArrayList<String> myConditions = new ArrayList<String>();
		ArrayList<String> myCommands = new ArrayList<String>();
		myInputArgs.remove(0);
		if(!myInputArgs.remove(0).equals("[")) return new sLogoValid(true, "expected condition list");
		for(int i = 0; i < 2; i++) {
			int internalLists = 0;
			while(true) {
				String tempArg = myInputArgs.remove(0);
				if(tempArg.equals("]") && internalLists == 0)break;
				if(tempArg.equals("[")) internalLists ++;
				if(tempArg.equals("[")) internalLists --;
				if(i == 0) myConditions.add(tempArg);
				if(i == 1) myCommands.add(tempArg);
				}
			}
		Turtle[] turtleArray = (Turtle[]) myModel.getTurtles().toArray();
		
		if(!myInputArgs.isEmpty()) myQueue.add(standardString(myInputArgs));
		return tempSlogoValid;
	}

	private sLogoValid interpretMultiTurtle(ArrayList<String> args) {
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = args;
		ArrayList<Integer> myTurtleIds = new ArrayList<Integer>();
		ArrayList<String> myCommands = new ArrayList<String>();
		String myCommand = myInputArgs.remove(0);
		if(!args.remove(0).equals("[")) return new sLogoValid(true, "Command expected [");
		while(!myInputArgs.get(0).equals("]")) {
			myTurtleIds.add(Integer.parseInt(myInputArgs.remove(0)));
		}
		myInputArgs.remove(0);
		Object[] turtleArray = myModel.getTurtles().toArray();
		for(int t: myTurtleIds) {
			// turtleArray[t]; //TODO: Set the turtles to modify
		}
		if(myCommand.equals("ask")) {
			if(!myInputArgs.remove(0).equals("[")) return new sLogoValid(true, "Command expected ["); 
			while(!myInputArgs.get(0).equals("]")) {
				myCommands.add(myInputArgs.remove(0));
			}
			tempSlogoValid = interpret(standardString(myCommands));
		}
		if(!myInputArgs.isEmpty())myQueue.add(standardString(myInputArgs));
		return tempSlogoValid;
	}

	private sLogoValid interpretUserCommand(ArrayList<String> args) {
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = args;
		ArrayList<String> myCommandVariables = new ArrayList<String>();
		ArrayList<String> myInputVariables = new ArrayList<String>();
		ArrayList<String> myCommands = new ArrayList<String>();
		String myUserCommand = myInputArgs.remove(0);
		//Make sure the command can be accessed from the model
		tempSlogoValid = myModel.getVariable(myUserCommand);
		if(tempSlogoValid.getError()) return tempSlogoValid;
		String[] t = tempSlogoValid.getMyStringValue().trim().split(" ");
		ArrayList<String> myCommandInput = new ArrayList<String>();
		myCommandInput.addAll(Arrays.asList(t));
		//Get all of the variables defined in the userCommand
		if(!myCommandInput.remove(0).equals("[")) return new sLogoValid(true, "Model Error: User Command defined incorrectly. Expected variable list");
		while(!myCommandInput.get(0).equals("]")){
			myCommandVariables.add(myCommandInput.remove(0));
			if(myCommandInput.isEmpty()) return new sLogoValid(true, "Model Error: Expected end to user defined variable command list");
		}
		
		//Get all of the commands defined in the userCommand
		myCommandInput.remove(0);
		int internalLists = 0;
		if(!myCommandInput.remove(0).equals("[")) return new sLogoValid(true, "Model Error: Expected user defined command command list");
		while(true) {
			if(internalLists == 0 && myCommandInput.get(0).equals("]")) {
				myCommandInput.remove(0);
				break;
			}
			if(myCommandInput.get(0).equals("[")) { internalLists += 1; }
			if(myCommandInput.get(0).equals("]")) { internalLists -= 1; }
			myCommands.add(myCommandInput.remove(0));
			if(myInputArgs.isEmpty()) return new sLogoValid(true, "Model Error: expected end to user list");
		}
		//Get the values of all of the variables
		if(!myInputArgs.remove(0).equals("[")) return new sLogoValid(true, "Expected list of variables");
		internalLists = 0;
		//TODO: make this handle commands within the variables
		while(true) {
			if(internalLists == 0 && myInputArgs.get(0).equals("]")) {
				myInputArgs.remove(0);
				break;
			}
			if(myInputArgs.get(0).equals("[")) { internalLists += 1; }
			if(myInputArgs.get(0).equals("]")) { internalLists -= 1; }
			myInputVariables.add(myInputArgs.remove(0));
			if(myInputArgs.isEmpty()) return new sLogoValid(true, "Expected end list delimiter");
		}
		//Check to see if we got the right number of variables
		if(myInputVariables.size() != myCommandVariables.size()) return new sLogoValid(true, "Expected " + myCommandVariables.size() + "arguments but recieved " + myInputVariables.size());
		//Map all of the defined variables
		int count = 0;
		for(String var : myCommandVariables) {
			sLogoValid temp = new sLogoValid();
			temp.setMyDoubleValue(Double.parseDouble(myInputVariables.get(count)));
			myModel.addVariable(var, temp);
			count++;
			if(tempSlogoValid.getError()) return tempSlogoValid;
		}
		
		//execute the commands
		tempSlogoValid = interpret(standardString(myCommands));
		
		//check for leftovers
		if(!myInputArgs.isEmpty()) myQueue.add(standardString(myInputArgs));
		return tempSlogoValid;
	}

	private sLogoValid makeUserDefinedComand(ArrayList<String> args) {
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = args;
		myInputArgs.remove(0);
		ArrayList<String> myCommandStructure = new ArrayList<String>();
		String myCommand = myInputArgs.remove(0);
		if(myLanguageProperties.containsKey(myCommand) || myShortCommands.containsKey(myCommand)) {
			return new sLogoValid(true, "Can not define command " + myCommand + " because command already defined");
		}
		for(int i = 0; i < 2; i++) {
			if(!myInputArgs.get(0).equals("[") && i == 0) return new sLogoValid(true, "expected variable list");
			if(!myInputArgs.get(0).equals("[") && i == 1) return new sLogoValid(true, "expected commands list");
			int internalLists = -1; 
			//Check for a variable list
			while(true) {
				if(internalLists == 0 && myInputArgs.get(0).equals("]")) {
					myCommandStructure.add(myInputArgs.remove(0));
					break;
				}
				if(myInputArgs.get(0).equals("[")) { internalLists += 1; }
				if(myInputArgs.get(0).equals("]")) { internalLists -= 1; }
				myCommandStructure.add(myInputArgs.remove(0));
				if(myInputArgs.isEmpty()) return new sLogoValid(true, "Expected end list delimiter" + args);
			}
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyStringValue(standardString(myCommandStructure));
		myModel.addVariable(myCommand, temp);
		if(!myInputArgs.isEmpty()) myQueue.add(standardString(myInputArgs));
		return tempSlogoValid;
		
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
	//TODO: Implement comment handling
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
			//Check if the syntax match with defining a variable 
			if(myCommandArr.contains("set") && tempArg.contains(":") && myCommandArr.indexOf("set") == myCommandArr.size()-1) {myCommandArr.add(tempArg); continue;}
			//Check if the value is a double or a variable pathed to a double 
			if(!doubleCheck(tempArg).getError()) {myCommandArr.add(doubleCheck(tempArg).getMyStringValue());}
			//Check if the value is another command
			else if(myShortCommands.containsValue(tempArg)) { //TODO: Add check for user defined commands
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
				for(String k : NO_PARAM_COMMANDS) { if(myCommand.equals(k)) return 1;}
				for(String k : ONE_PARAM_COMMANDS) { if(myCommand.equals(k)) return 2;}
				for(String k : TWO_PARAM_COMMANDS) { if(myCommand.equals(k))  return 3;}
				if("MakeUserInstruction".equals(myCommand))  return 8;
				if("Tell".equals(myCommand)) return 4;
				if("Ask".equals(myCommand) || "AskWith".equals(myCommand))  return 7;
				return -1;
				
	}

	private sLogoValid interpretVarLoop(ArrayList<String> args) {
		sLogoValid tempSlogoValid = new sLogoValid();
		//Setup instance variables
		String myVar; //TODO: add a check to make sure this isn't the same as another variable
		String myCommand;
		double myStart = 0;
		double myEnd;
		double myIncrement = 1;
		ArrayList<String> myCommands = new ArrayList<String>(); 
		ArrayList<String> myInputArgs = (ArrayList<String>) args.clone();
		//remove the commands name and the opening bracket
		myCommand = myInputArgs.remove(0);
		//Check if there is actually a list
		if(!myInputArgs.remove(0).equals("[")) {return new sLogoValid(true, "Command expected list");}
		//get all the opening stuff
		//TODO: Make this section capable of handling commands
		myVar = myInputArgs.remove(0);
		if(myCommand.equals("for")) {
			myStart = doubleCheck(myInputArgs.remove(0)).getMyDoubleValue();
			myEnd = doubleCheck(myInputArgs.remove(0)).getMyDoubleValue();
			myIncrement = doubleCheck(myInputArgs.remove(0)).getMyDoubleValue();
		} else {myEnd = doubleCheck(myInputArgs.remove(0)).getMyDoubleValue();}
		//Check to make sure we've hit the end of the list
		if(!myInputArgs.remove(0).equals("]")) {return new sLogoValid(true, "Can not handle advanced arguments in for loops yet");}
		if(!myInputArgs.remove(0).equals("[")) {return new sLogoValid(true, "Command expected second list");}
		//Collect all the commands
		int internalLoopCount = 0;
		do {
			if(myInputArgs.isEmpty()) { return new sLogoValid(true, "missing list end delimiter");}
			if("]".equals(myInputArgs.get(0))  && internalLoopCount == 0){break;}
			if("[".equals(myInputArgs.get(0))) { internalLoopCount += 1; }
			if("]".equals(myInputArgs.get(0))) { internalLoopCount -= 1; }
				myCommands.add(myInputArgs.remove(0));
		} while (true);
		myInputArgs.remove(0);
		//Loop Time
		for(Double i = myStart; i < myEnd; i += myIncrement) {
			ArrayList<String> myTempCommands = (ArrayList<String>) myCommands.clone();
			for(int k = 0; k < myTempCommands.size(); k++) {
				if(myTempCommands.get(k).equals(myVar)) {
					myTempCommands.remove(k);
					myTempCommands.add(k, i.toString());
				}
			}
			tempSlogoValid = interpret(standardString(myTempCommands));
			if(tempSlogoValid.getError()) {
				return tempSlogoValid;
			}
		}
		if(!myInputArgs.isEmpty()) {myQueue.add(standardString(myInputArgs));}
		return tempSlogoValid;
	}

	private sLogoValid interpretBoolean(ArrayList<String> args) {
		//Setup instance variables
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = (ArrayList<String>) args.clone();
		ArrayList<String> myCondition = new ArrayList<String>();
		ArrayList<String> myCommandArr = new ArrayList<String>();
		//Determine the boolean;
		String myCommand = myInputArgs.remove(0);
		while(!myInputArgs.get(0).equals("[")) { myCondition.add(myInputArgs.remove(0));}
		//remove the opening delimiter
		myInputArgs.remove(0);
		if(checkCondition(myCondition).getMyDoubleValue() > 0) {
			while(!myInputArgs.get(0).equals("]")) {myCommandArr.add(myInputArgs.remove(0));}
			tempSlogoValid = interpret(standardString(myCommandArr));
		//check to see if there is an else statement
		} else if(myCommand.equals("ifelse")) {
			//Skip to the second list
			while(!myInputArgs.remove(0).equals("]")) {}
			if(!myInputArgs.remove(0).equals("[")) {return new sLogoValid(true, "expected second list");}
			//Add the else commands
			while(!myInputArgs.get(0).equals("]")) { myCommandArr.add(myInputArgs.remove(0));}
			tempSlogoValid = interpret(standardString(myCommandArr));
		//if not action is performed, return 0
		} else {tempSlogoValid.setMyDoubleValue(0);}
		return tempSlogoValid;
	}

	private sLogoValid checkCondition(ArrayList<String> myCondition) {
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs =(ArrayList<String>) myCondition.clone();
		ArrayList<String> conditionA = new ArrayList<String>();
		double conditionADouble;
		String comparator = ""; 
		ArrayList<String> conditionB = new ArrayList<String>();
		double conditionBDouble;
		//TODO: replace this with a lambda
		//get all the conditions until the comparator
		while(!myInputArgs.get(0).equals("lessp") && 
				!myInputArgs.get(0).equals("greaterp") && 
				!myInputArgs.get(0).equals("equalp") && 
				!myInputArgs.get(0).equals("notEqualp"))  {
			conditionA.add(myInputArgs.remove(0));
		}
		comparator = myInputArgs.remove(0);
		//Add all of conditionB
		while(!myInputArgs.isEmpty()) {conditionB.add(myInputArgs.remove(0));} //TODO: add in & and || statements
		//Convert conditionA to a double
		if(conditionA.size() > 1) {conditionADouble = doubleCheck(interpret(standardString(conditionA)).getMyStringValue()).getMyDoubleValue();}
		else { conditionADouble = doubleCheck(conditionA.get(0)).getMyDoubleValue();}
		//Convert conditionB to a double
		if(conditionB.size() > 1) {conditionBDouble = doubleCheck(interpret(standardString(conditionB)).getMyStringValue()).getMyDoubleValue();}
		else { conditionBDouble = doubleCheck(conditionB.get(0)).getMyDoubleValue();}
		//Check which is greater
		switch(comparator) {
		case "lessp": return new sLogoValid(conditionADouble < conditionBDouble);
		case "greaterp": return new sLogoValid(conditionADouble > conditionBDouble);
		case "equalp": return new sLogoValid(conditionADouble == conditionBDouble);
		case "notequalp": return new sLogoValid(conditionADouble != conditionBDouble);
		default: return new sLogoValid(true, "something went wrong with boolean loop");
		}
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
			return new sLogoValid(true, "User input is missing or invalid");
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
				concat += myTempArr.remove(0);
				if(!myTempArr.isEmpty()) concat+= " ";
				}
			}
		return concat;
		}
}
