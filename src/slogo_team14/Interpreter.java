package slogo_team14;

import java.io.File;
import java.util.Properties;

public class Interpreter {
	private String myInput;
	private sLogoValid mySlogoValid;
	private Properties myLanguageProperties; 
	
	public Interpreter(String language, String input) {
		myInput = input;
		myLanguageProperties = new languageParser(language).getProperties();
		
	}
	
}
