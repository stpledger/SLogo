package backEnd;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Properties;

public class Interpreter {
	private sLogoValid mySlogoValid;
	private Properties myLanguageProperties;
	private static final String[] noParamCommands = {"PenUp","PenDown","ShowTurtle","HideTurtle","Home","ClearScreen","XCoordinate","YCoordinate","Heading","IsPenDown","IsShowing","Pi", "GetPenColor", "GetShape", "Stamp", "ClearStamps"};
	private static final String[] oneParamCommands = {"Forward", "Backward", "Left", "Right", "SetHeading", "Random", "Sine", "Cosine", "Tangent", "ArcTangent", "NaturalLog", "Not", "Minus", "SetBackground", "SetPenColor", "SetPenSize", "SetShape", "SetPalette"};
	private static final String[] twoParamCommands = {"SetTowards", "SetPosition", "Sum", "Difference", "Product", "Quotient", "Remainder", "Power", "LessThan","GreaterThan", "Equal", "NotEqual", "And", "Or", "MakeVariable"}; 
	//TODO: Add multiple turtle commands
	public Interpreter(String language) {
		mySlogoValid = new sLogoValid();
		//Try to import the language properties
		try {
			myLanguageProperties = new languageParser(language).getProperties();
		} catch(Exception e) {
			mySlogoValid.setError(true);
			mySlogoValid.setMyStringValue("Error: Can not find " + language + ".properties");
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
		sLogoValid tempSlogoValid = new sLogoValid();
		String[] args = s.split("\\s+");
		System.out.println(args[0]);
		//Check to see if the first argument is valid
		if(!myLanguageProperties.containsKey(args[0])) {
			tempSlogoValid.setMyStringValue("Invalid command: " + args[0]);
			tempSlogoValid.setError(true);
			return tempSlogoValid;
		} 
		String myCommand = myLanguageProperties.getProperty(args[0]);
		String[] mySyntax = getCommandSyntax(myCommand);
		//Handles if there is no argument needed
		tempSlogoValid = argumentCheck(args, mySyntax);
		//tempSlogoValid.setMyStringValue(myCommand); //TODO: replace this with something that makes a command object
				
		return tempSlogoValid;
	}
	private sLogoValid argumentCheck(String[] args, String[] expectedSyntax) {
		sLogoValid tempSlogoValid = new sLogoValid();
		int myExpectedSyntax = expectedSyntax.length;
		ArrayList<String> myInputArgs = new ArrayList<String>();
		myInputArgs.addAll(Arrays.asList(args));
		ArrayList<String> myTempArgs = new ArrayList<String>();
		
			//Concatenate all the arguments needed for the primary command
			while(myTempArgs.size() < myExpectedSyntax) {
				//Check to make sure that there are the appropriate number of 
				if(myInputArgs.isEmpty()) {
					mySlogoValid.setError(true);
					mySlogoValid.setMyStringValue("Invalid number of Arguments for command: "+ myInputArgs.get(0));
					return mySlogoValid;
				}
				//Check to make sure there isn't another command
				if(!myTempArgs.isEmpty() && myLanguageProperties.containsKey(myInputArgs.get(0))) {
					System.out.println("Internal loop: " + myInputArgs.toString());
					String[] internalCommandSyntax = getCommandSyntax(myLanguageProperties.getProperty(myInputArgs.get(0)));
					tempSlogoValid = argumentCheck(myInputArgs.stream().toArray(String[]::new), internalCommandSyntax);
					for(int i = 0; i < internalCommandSyntax.length; i++) {
						internalCommandSyntax[i] = myInputArgs.remove(0);	
					}
					tempSlogoValid.setMyStringValue("res");
					myInputArgs.add(tempSlogoValid.getMyStringValue());
					System.out.println(tempSlogoValid.getMyStringValue());
				}
				myTempArgs.add(myInputArgs.remove(0));
			}
			//Interpret secondary arguments
			if(myInputArgs.size() > 0) {
				String myConcatArgs = "";
				while(myInputArgs.size() > 0) {
					myConcatArgs += myInputArgs.remove(0) + " ";
				}
				tempSlogoValid = interpret(myConcatArgs);
				System.out.println("Internal Loop: " + tempSlogoValid.getMyStringValue());
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
		if(myCommand.equals("Repeat") || myCommand.equals("If")) {
			String[] syntax = {"com", "arg", "[","mul","]"};
			return syntax;
		}
		if(myCommand.equals("DotTimes") || myCommand.equals("For")) {
			String[] syntax = {"com","[","mul","]","[","mul","]" };
			return syntax;
		}
		if(myCommand.equals("IfElse") || myCommand.equals("MakeUserInstruction")) {
			String[] syntax = {"com", "arg","[","mul","]","[","mul","]"};
			return syntax;
		}
		return null;
	}

	public static void main(String[] args) {
		Interpreter i = new Interpreter("English");
		sLogoValid s = i.interpret("repeat 6 [ fd 20 ]");  
		System.out.println(s.getMyStringValue());
		
	}
}
