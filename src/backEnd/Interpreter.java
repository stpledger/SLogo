package backEnd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Properties;

public class Interpreter {
	private String myLanguage = "English";
	private sLogoValid mySlogoValid;
	private Properties myLanguageProperties;
	private Properties myShortCommands;
	private Controller myController;
	private ModelModifiable myModelModifiable;
	private static final String[] noParamCommands = {"PenUp","PenDown","ShowTurtle","HideTurtle","Home","ClearScreen","XCoordinate","YCoordinate","Heading","IsPenDown","IsShowing","Pi", "GetPenColor", "GetShape", "Stamp", "ClearStamps"};
	private static final String[] oneParamCommands = {"Forward", "Backward", "Left", "Right", "SetHeading", "Random", "Sine", "Cosine", "Tangent", "ArcTangent", "NaturalLog", "Not", "Minus", "SetBackground", "SetPenColor", "SetPenSize", "SetShape", "SetPalette"};
	private static final String[] twoParamCommands = {"SetTowards", "SetPosition", "Sum", "Difference", "Product", "Quotient", "Remainder", "Power", "LessThan","GreaterThan", "Equal", "NotEqual", "And", "Or", "MakeVariable"}; 
	//TODO: Add multiple turtle commands
	
	public Interpreter( ModelModifiable m) {
		mySlogoValid = new sLogoValid();
		myModelModifiable = m;
		myController = new Controller(m);
		//Try to import the language properties
		try {
			myLanguageProperties = new languageParser(myLanguage).getProperties();
			//Import the short commands
			myShortCommands = new Properties();
			myShortCommands.load(this.getClass().getResourceAsStream("/resources/languages/shortCommands.properties"));
		} catch(Exception e) {
			mySlogoValid.setError(true);
			mySlogoValid.setMyStringValue("Error: Can not find " + myLanguage + ".properties");
		}
		
	}
	
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
	
	public sLogoValid interpret(String s) {
		//Check to ensure there aren't prior errors
		if(mySlogoValid.getError()) {
			return mySlogoValid;
		} 
		//Check to ensure the string isn't empty
		if(s == null || s.equals("")) {
			mySlogoValid.setError(true);
			mySlogoValid.setMyStringValue("User input is missing or invalid");
			return mySlogoValid;
		}
			//System.out.println("Initial String: " + s);
		sLogoValid tempSlogoValid = new sLogoValid();
		String[] args = s.trim().split("\\s+");
		//Check to see if the first argument is valid
		if(!myLanguageProperties.containsKey(args[0])) {
			tempSlogoValid.setMyStringValue("Invalid command: " + args[0]);
			tempSlogoValid.setError(true);
			return tempSlogoValid;
		} 
		//Convert the command to English
		String myCommand = myLanguageProperties.getProperty(args[0]);
		//Convert the English command to shorthand
		args[0] = myShortCommands.getProperty(myCommand);
			//Check for advanced syntax
				if(args[0].equals("repeat")) {
					tempSlogoValid = interpretRepeat(args);
						if(tempSlogoValid.getError()) {
							return tempSlogoValid;
						}
					//tempSlogoValid = passToController(tempSlogoValid.getMyStringValue());
					return tempSlogoValid;
				} else if(args[0].equals("if") || args[0].equals("ifelse")) {
						tempSlogoValid = interpretBoolean(args);
						if(tempSlogoValid.getError()) {
							return tempSlogoValid;
						}					
					
				} else if(args[0].equals("for") || args[0].equals("dotimes")) {
					tempSlogoValid = interpretVarLoop(args);
						if(tempSlogoValid.getError()) {
							return tempSlogoValid;
						}
				} else {
		//Get a string array with the syntax
		String[] mySyntax = getCommandSyntax(myCommand);
		tempSlogoValid = interpretBasicArgs(args, mySyntax);
			if(tempSlogoValid.getError()) {
				System.out.println("Error: " + tempSlogoValid.getMyStringValue());
				return tempSlogoValid;
			}
		tempSlogoValid = passToController(tempSlogoValid.getMyStringValue());
		return tempSlogoValid;
		}
				return tempSlogoValid;
	}

	private sLogoValid interpretVarLoop(String[] args) {
		//Setup Instance Variables
		String myVar;
		String myCommand;
		double myStart;
		double myEnd;
		double myIncrement;
		String myCommands = "";
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = new ArrayList<String>();
		myInputArgs.addAll(Arrays.asList(args));
		ArrayList<String> myTempArgs = new ArrayList<String>();
		
		//remove the command name and the 
		myCommand = myInputArgs.remove(0);
		myInputArgs.remove(0);
		myVar = myInputArgs.remove(0);
		
		//Check which VarLoop type we're using
		if(myCommand.equals("for")) {
		myStart =  Double.parseDouble(myInputArgs.remove(0));
		myEnd = Double.parseDouble(myInputArgs.remove(0));
		myIncrement = Double.parseDouble(myInputArgs.remove(0));
		} else {
		myEnd = Double.parseDouble(myInputArgs.remove(0));
		myStart = 0;
		myIncrement = 1;
		}
		
		//Check to make sure we're only dealing with simple info
		if(!myInputArgs.get(0).equals("]")) {
			tempSlogoValid.setError(true);
			tempSlogoValid.setMyStringValue("Can not handle advanced arguments in for loops yet");
			//TODO: Handle advanced arguments in for loops
			return tempSlogoValid;
		}
		myInputArgs.remove(0);
		//Check to make sure there is a second list
		if(!myInputArgs.get(0).equals("[")) {
			tempSlogoValid.setError(true);
			tempSlogoValid.setMyStringValue("expected second list");
			return tempSlogoValid;
		}
		myInputArgs.remove(0);
		while(!myInputArgs.get(0).equals("]")) {
			myCommands += myInputArgs.remove(0) + " ";
		}
		myInputArgs.remove(0);
		
		for(Double i = myStart; i < myEnd; i += myIncrement) {
			String myTempCommands;
			if(myCommands.contains(myVar)) {
				myTempCommands = myCommands.replaceAll(myVar, i.toString());
				System.out.println(myTempCommands);
			} else {
				myTempCommands = myCommands;
			}
			tempSlogoValid = interpret(myTempCommands);
			if(tempSlogoValid.getError()) {
				return tempSlogoValid;
			}
		}
		return tempSlogoValid;
		//TODO: Check for leftover arguments
		
	}

	private sLogoValid interpretBoolean(String[] args) {
		//Setup Instance Variables
			String myCondition = "";
			String myCommands = "";
			sLogoValid tempSlogoValid = new sLogoValid();
			ArrayList<String> myInputArgs = new ArrayList<String>();
			myInputArgs.addAll(Arrays.asList(args));
			ArrayList<String> myTempArgs = new ArrayList<String>();
		//Determine the boolean
			myTempArgs.add(myInputArgs.remove(0));
			while(!myInputArgs.get(0).equals("[")) {
				myCondition += myInputArgs.remove(0) + " ";
			}
			myInputArgs.remove(0);
			if(checkCondition(myCondition).getMyDoubleValue() > 0) {
				while(!myInputArgs.get(0).equals("]")) {
					myCommands += myInputArgs.remove(0) + " ";
				}
				tempSlogoValid = interpret(myCommands);
				
			} else if(myTempArgs.get(0).equals("ifelse")) {
				//Skip to the second list
				while(!myInputArgs.get(0).equals("]")) {
					myInputArgs.remove(0);
				}
				myInputArgs.remove(0);
				//Make sure there is a second list
				if(!myInputArgs.get(0).equals("[")){
					tempSlogoValid.setError(true);
					tempSlogoValid.setMyStringValue("ifelse: Expected a second list of Commands");
					return tempSlogoValid;
				}
				myInputArgs.remove(0);
				while(!myInputArgs.get(0).equals("]")) {
					myCommands += myInputArgs.remove(0) + " ";
				}
				tempSlogoValid = interpret(myCommands);
			} else {
				tempSlogoValid.setMyDoubleValue(0);
				return tempSlogoValid;
			}
			//TODO: Implement a check for leftover strings
		return tempSlogoValid;
	}

	private sLogoValid checkCondition(String myCondition) {
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = new ArrayList<String>();
		myInputArgs.addAll(Arrays.asList(myCondition.trim().split(" ")));
		String conditionA = "";
		String comparator = "";
		String conditionB = "";
		//Find all the parts of the first condition
		while(!myInputArgs.get(0).equals("lessp") && 
				!myInputArgs.get(0).equals("greaterp") &&
				!myInputArgs.get(0).equals("equalp") &&
				!myInputArgs.get(0).equals("notequalp")) {
			conditionA += myInputArgs.remove(0) + " "; 
		} 
		if(conditionA.split(" ").length > 1) {
			tempSlogoValid = interpret(conditionA);
			if(tempSlogoValid.getError()) {
				return tempSlogoValid;
			}
			conditionA = tempSlogoValid.getMyStringValue();
		}
		comparator = myInputArgs.remove(0);
		if(!comparator.equals("lessp") && 
				!comparator.equals("greaterp") &&
				!comparator.equals("equalp") &&
				!comparator.equals("notequalp")) {
			tempSlogoValid.setError(true);
			tempSlogoValid.setMyStringValue("comparator " + comparator + " is invalid");
			return tempSlogoValid;
		}
		while(!myInputArgs.isEmpty()) {
			conditionB += myInputArgs.remove(0);
		}
		if(conditionB.split("//s+").length > 1) {
			tempSlogoValid = interpret(conditionB);
			if(tempSlogoValid.getError()) {
				return tempSlogoValid;
			}
			conditionB = tempSlogoValid.getMyStringValue();
		}
		//Check based on comparator
		if(comparator.equals("lessp")) {
			if(Double.parseDouble(conditionA) < Double.parseDouble(conditionB)) {
				tempSlogoValid.setBoolean(true);
				return tempSlogoValid;
			} else {
				tempSlogoValid.setBoolean(false);
				return tempSlogoValid;
			}} else if(comparator.equals("greaterp")) {
			if(Double.parseDouble(conditionA) > Double.parseDouble(conditionB)) {
				tempSlogoValid.setBoolean(true);
				return tempSlogoValid;
			} else {
				tempSlogoValid.setBoolean(false);
				return tempSlogoValid;
			}} else if(comparator.equals("equalp")) {
			if(Double.parseDouble(conditionA) == Double.parseDouble(conditionB)) {
				tempSlogoValid.setBoolean(true);
				return tempSlogoValid;
			} else {
				tempSlogoValid.setBoolean(false);
				return tempSlogoValid;
			}} else if (comparator.equals("notequalp")) {
				if(Double.parseDouble(conditionA) != Double.parseDouble(conditionB)) {
					tempSlogoValid.setBoolean(true);
					return tempSlogoValid;
				} else {
					tempSlogoValid.setBoolean(false);
					return tempSlogoValid;
				}
			} else {
			tempSlogoValid.setError(true);
			tempSlogoValid.setMyStringValue("Could not check boolean statements");
			return tempSlogoValid;
			}
		}
		

	private sLogoValid interpretRepeat(String[] args) {
		//Setup Instance Variables
		sLogoValid tempSlogoValid = new sLogoValid();
		ArrayList<String> myInputArgs = new ArrayList<String>();
		myInputArgs.addAll(Arrays.asList(args));
		ArrayList<String> myTempArgs = new ArrayList<String>();
		int myTimes = 0;
		//Remove 'Repeat'
		myInputArgs.remove(0);
		//Check for valid loop number
		String myNum = "";
		while(!myInputArgs.get(0).equals("[")) {
			myNum += myInputArgs.remove(0) + " ";
		}
		myInputArgs.remove(0);
		//check to see if there was only one value
		if(myNum.split(" ").length > 1) {
			tempSlogoValid = interpret(myNum);
			//TODO: IT's possible the line below needs to check to see if there is a double
			if(tempSlogoValid.getError()) {
				return tempSlogoValid;
			}
		myTimes = (int) tempSlogoValid.getMyDoubleValue();
		} else {
			myTimes = (int) Double.parseDouble(myNum);
		}
		if(myTimes == 0) {
			tempSlogoValid.setMyDoubleValue(0);
			return tempSlogoValid;
		}
		//Parse out the commands
		String myCommands = "";
		while(!myInputArgs.get(0).equals("]")){
			myCommands += myInputArgs.remove(0) + " "; 
		}
		myInputArgs.remove(0);
		//Loop time
		System.out.println(myTimes);
		for(int i = 0; i < myTimes; i++) {
			tempSlogoValid = interpret(myCommands);
			if(tempSlogoValid.getError()) {
				return tempSlogoValid;
			}
			System.out.println(tempSlogoValid.getMyStringValue());
		}
		return tempSlogoValid;

	}

	private sLogoValid interpretBasicArgs(String[] args, String[] expectedSyntax) {
		sLogoValid tempSlogoValid = new sLogoValid();
		int myExpectedSyntax = expectedSyntax.length;
		ArrayList<String> myInputArgs = new ArrayList<String>();
		myInputArgs.addAll(Arrays.asList(args));
		ArrayList<String> myTempArgs = new ArrayList<String>();
			//Add the initial command
			myTempArgs.add(myInputArgs.remove(0));
			//Concatenate all the arguments needed for the primary command	
			while(myTempArgs.size() < myExpectedSyntax) {
				//Check to make sure that there are the appropriate number of arguments
				if(myInputArgs.isEmpty()) {
					mySlogoValid.setError(true);
					mySlogoValid.setMyStringValue("Invalid number of Arguments for command: "+ myTempArgs.get(0));
					return mySlogoValid;
				}
				
				//Check to see if we only need one more argument
				if(myTempArgs.size() + 1 == myExpectedSyntax && myInputArgs.size() == 1) {
					myTempArgs.add(myInputArgs.remove(0));
					String concatArgs = "";
					for(String k : myTempArgs) {
						concatArgs += k + " ";
					}
					tempSlogoValid.setMyStringValue(concatArgs);
					return tempSlogoValid;
				}
				
				//Check to see if there is an internal list
				if(myInputArgs.get(0).equals("[")) {
					myTempArgs.add(myInputArgs.remove(0));
					String myList  = "";
					while(!myInputArgs.get(0).equals("]")) {
						myList += myInputArgs.remove(0) + " ";
					}
					tempSlogoValid = interpret(myList);
					if(tempSlogoValid.getError()) {
						return tempSlogoValid;
					}
						//System.out.println("MyList: " + myList);
					myTempArgs.add(tempSlogoValid.getMyStringValue());
					myTempArgs.add(myInputArgs.remove(0));
						//System.out.println(myTempArgs.toString());
				}
				
				
				//Check to make sure there isn't another command
				if(!myInputArgs.isEmpty() && myLanguageProperties.containsKey(myInputArgs.get(0))) {
					System.out.println("Internal loop: " + myInputArgs.toString());
					String[] internalCommandSyntax = getCommandSyntax(myLanguageProperties.getProperty(myInputArgs.get(0)));
					tempSlogoValid = interpretBasicArgs(myInputArgs.stream().toArray(String[]::new), internalCommandSyntax);
					for(int i = 0; i < internalCommandSyntax.length; i++) {
						internalCommandSyntax[i] = myInputArgs.remove(0);	
					}
					tempSlogoValid = interpret(tempSlogoValid.getMyStringValue());
					//TODO: Make sure this sets the tempSlogoValid to the value of an internal command
						if(tempSlogoValid.getError()) {
							return tempSlogoValid;
						}
					myInputArgs.add(tempSlogoValid.getMyStringValue());
				} else if(! myInputArgs.isEmpty()) { 
					myTempArgs.add(myInputArgs.remove(0));
				}
			}
			//Interpret secondary arguments
			if(myInputArgs.size() > 0) {
					//System.out.println("Second Argument Detected");
				String myConcatArgs = "";
				while(myInputArgs.size() > 0) {
					myConcatArgs += myInputArgs.remove(0) + " ";
				}
				tempSlogoValid = interpret(myConcatArgs);
					//System.out.println("Internal Loop: " + tempSlogoValid.getMyStringValue());
				//TODO: find a way to pass this up a level or print it to the prompt
			}
			
			//Print the final result
			String res = String.join(" ", myTempArgs);
			tempSlogoValid.setMyStringValue(res);
			
		return tempSlogoValid;	
	}
	

	private String[] getCommandSyntax(String myCommand) {
		//com represents the initial command
		//arg represents an expression
		//[] represents the brackets of a list
		//mul represents 1 or more possible elements in a list
		for(String k : noParamCommands) {
			if(myCommand.equals(k)) {
				String[] syntax = {"com"};
				return syntax;
			}
		}
		for(String k : oneParamCommands) {
			if(myCommand.equals(k)) {
				String[] syntax = {"com", "arg"};
				return syntax;
			}
		}
		for(String k : twoParamCommands) {
			if(myCommand.equals(k)) {
				String[] syntax = {"com", "arg", "arg"};
				return syntax;
			}
		}
		if(myCommand.equals("MakeUserInstruction")) {
			String[] syntax = {"com", "arg","[","mul","]","[","mul","]"};
			return syntax;
		}
		return null;
	}
	
	private sLogoValid passToController(String s) {
		if(s.split(" ").length > 1) {		
		String[] args = s.split(" ", 2);
		return myController.create(args[0], args[1]);
		} else {
			return myController.create(s, "");
		}
	}
}
