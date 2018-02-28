package backEnd.commands;

import backEnd.sLogoValid;
import backEnd.Model;
import backEnd.ModelModifiable;

public class VariableCommand extends CommandGroup {
	private ModelModifiable myModel;

	public VariableCommand(String command, String[] args, ModelModifiable model) {
		super(command, args);
		myModel = model;
		this.mySlogoValid = run(command, args);
		// TODO Auto-generated constructor stub
	}
	
	private sLogoValid run(String command, String[] args){
		if (command.equals("make") || command.equals("set")) {
			return setVar(args);
		}
		return null;
	}
	
	private sLogoValid setVar(String[] args){
		myModel.addVariable(args[0], args[1]);
		return null;
	}
	
	

}
