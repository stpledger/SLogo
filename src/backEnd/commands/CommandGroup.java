package backEnd.commands;

import backEnd.sLogoValid;

public abstract class CommandGroup {
	sLogoValid mySlogoValid;
	/**
	 * Public constructor of command
	 * @param command the string value for the command
	 * @param args the string[] of arguments
	 */
	public CommandGroup(String command, String[] args) {
		mySlogoValid = new sLogoValid();
	}
	/**
	 * 
	 * @return
	 */
	public sLogoValid execute() {
		return mySlogoValid;
		
	}
}
