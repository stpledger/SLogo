package backEnd;

import java.io.PrintStream;
import java.util.Iterator;
import java.util.Map.Entry;
import java.util.Properties;

public class languageParser {
	private Properties myLanguageProperties = new Properties();
	
	public languageParser(String lang) {
	try {
		//Load in the existing properties file
		Properties tempLanguageProperties = new Properties();
		tempLanguageProperties.load(this.getClass().getResourceAsStream("/resources/languages/"+ lang + ".properties"));
		//Flip Key/Value and ensure there aren't two values per key
		Iterator tempLanguagePropertiesIterator = tempLanguageProperties.keySet().iterator();
		while(tempLanguagePropertiesIterator.hasNext()) {
			String tempKey = (String) tempLanguagePropertiesIterator.next();
			String tempValue = tempLanguageProperties.getProperty(tempKey);
			//Check to see if there are multiple inputs for each command
			if(tempValue.contains("|")) {
				String[] tempValueArr = tempValue.split("\\|");
				for(String k : tempValueArr) {
					myLanguageProperties.setProperty(k, tempKey);
				}
			} else {
				myLanguageProperties.setProperty(tempValue, tempKey);
			}
		}
			//Print all the properties read in to console
			//Iterator newTempIterator = myLanguageProperties.keySet().iterator();
			//while(newTempIterator.hasNext()) {
				//String temp = (String) newTempIterator.next();
				//System.out.println(temp + " " + myLanguageProperties.getProperty(temp));
			//}
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
