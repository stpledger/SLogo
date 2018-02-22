package slogo_team14;

import java.io.PrintStream;
import java.util.Properties;

public class languageParser {
	private Properties myLanguageProperties = new Properties();
	
	public languageParser(String lang) {
	try {
		myLanguageProperties.load(this.getClass().getResourceAsStream("/resources/languages/"+ lang + ".properties"));
	} catch(Exception e){
		System.out.println("Error Parsing in language file");
		e.printStackTrace();
	}
	}
	
	public Properties getProperties() {
		return myLanguageProperties;
	}


	//public static void main(String[] args) {
	//	languageParser lp = new languageParser("English");
	//}

}
