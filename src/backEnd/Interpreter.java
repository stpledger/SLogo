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
	private static final String[] twoParamCommands = {"towards", "setxy", "sum", "difference", "product", "quotient", "remainder", "pow", "lessp","greaterp", "equal", "notequalp", "And", "Or", "set", "/","*"}; 

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
		//Execute the current low-level command
		mySlogoValid = passToController(mySlogoValid.getMyStringValue());
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
	
	private void leftOverCheck(ArrayList<String> args) {
		ArrayList<String> myInputArgs = args;
		if(!myInputArgs.isEmpty()) {
			String concat = "";
			while(!myInputArgs.isEmpty()) {
				concat += myInputArgs.remove(0) + " ";
			}
			myQueue.add(concat);
		}
	}
	/**
	 * 
	 * @param args
	 * @return
	 */
	private sLogoValid interpretBasic(ArrayList<String> args) {
		int expectedLength = getCommandSyntaxLength(args.get(0));
		if(expectedLength < 1) return new sLogoValid(true, "Command not found: " + args.get(0));
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
		// TODO Auto-generated method stub
		return null;
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
}
