package backEnd;

import backEnd.sLogoValid;

public abstract class CommandGroup {
	sLogoValid mySlogoValid;
	private String executedCommand;
	/**
	 * Public constructor of command
	 * @param command the string value for the command
	 * @param args the string[] of arguments
	 */
	public CommandGroup(String command, String[] args) {
		executedCommand = command + " ";
		executedCommand += String.join(" ", args);
		mySlogoValid = new sLogoValid();
	}
	/**
	 * 
	 * @return
	 */
	public sLogoValid execute() {
		return mySlogoValid;
	}
	
	public String toString() {
		return executedCommand;
	}
}
