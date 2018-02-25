package slogo_team14;

import java.io.File;
import java.util.Properties;

public class Interpreter {
	private sLogoValid mySlogoValid;
	private Properties myLanguageProperties;
	
	
	
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
		if(myLanguageProperties.containsKey("fd")) {
			tempSlogoValid.setMyStringValue("We gots it");
		}
		
		return tempSlogoValid;
	}
	
	public static void main(String[] args) {
		Interpreter i = new Interpreter("English");
		sLogoValid s = i.interpret("fd"); 
		System.out.println(s.getMyStringValue());
		
	}
}
