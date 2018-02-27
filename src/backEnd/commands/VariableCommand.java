package backEnd.commands;

import backEnd.sLogoValid;

public class VariableCommand extends CommandGroup {
	private ModelModifiable myModel;

	public VariableCommand(String command, String[] args) {
		super(command, args);
		myModel = new Model();
		this.mySlogoValid = run(command, args);
		// TODO Auto-generated constructor stub
	}
	
	private sLogoValid run(String command, String[] args){
		if (command.equals("make") || command.equals("set")){
			return setVar(command, args);
		}
		return null;
	}
	
	private sLogoValid setVar(String command, String[] args){
		
		return null;
	}
	
	

}
