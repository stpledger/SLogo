package slogo_team14;

import java.util.Properties;

public class Interpreter {
	private sLogoValid mySlogoValid;
	private Properties myLanguageProperties;
	private static final String[] noParamCommands = {"PenUp","PenDown","ShowTurtle","HideTurtle","Home","ClearScreen","XCoordinate","YCoordinate","Heading","IsPenDown","IsShowing","Pi"};
	private static final String[] oneParamCommands = {"Forward", "Backward", "Left", "Right", "SetHeading", "Random", "Sine", "Cosine", "Tangent", "ArcTangent", "NaturalLog", "Not" };
	
	
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
	private sLogoValid argumentCheck(String[] args, String[] expectedArguments) {
		sLogoValid tempSlogoValid = new sLogoValid();
		int expectedArgsNum = expectedArguments.length;
		String[] myTempArgs = new String[expectedArgsNum+1];
			if(args.length > expectedArgsNum+1) {
				String myConcatArgs = "";
				for(int i = expectedArgsNum+1; i < args.length; i++) {
					myConcatArgs += args[i] + " ";
				}
				tempSlogoValid = interpret(myConcatArgs);
				System.out.println("Internal Loop: " + tempSlogoValid.getMyStringValue());
				//TODO: find a way to pass this up a level or print it to the prompt
			}
			//Concatenate all the arguments needed for the primary command
			for(int k = 0; k < expectedArgsNum+1; k++) {
				myTempArgs[k] = args[k];
			}
			
			//Print the final result
			String res = String.join(" ", myTempArgs);
			tempSlogoValid.setMyStringValue(res);
			
		return tempSlogoValid;	
	}
	private String[] getCommandSyntax(String myCommand) {
		for(String k : noParamCommands) {
			if(myCommand.equals(k)) {
				return new String[0];
			}
		}
		for(String k : oneParamCommands) {
			if(myCommand.equals(k)) {
				return new String[1];
			}
		}
		return null;
	}

	public static void main(String[] args) {
		Interpreter i = new Interpreter("English");
		sLogoValid s = i.interpret("fd 20 fd 20 bk 20");  
		System.out.println(s.getMyStringValue());
		
	}
}
