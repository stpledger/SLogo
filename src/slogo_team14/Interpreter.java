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
		sLogoValid tempSlogoValid = new sLogoValid();
		return tempSlogoValid;
	}
	
}
