package backEnd;

import java.util.Arrays;

public class VariableCommand extends CommandGroup {
	private ModelModifiable myModel;

	public VariableCommand(String command, String[] args, ModelModifiable model) {
		super(command, args);
		myModel = model;
		this.mySlogoValid = run(command, args);
		// TODO Auto-generated constructor stub
	}

	@Override
	public sLogoValid execute() {
		return this.mySlogoValid;
	}

	private sLogoValid run(String command, String[] args){
		if (command.equals("make") || command.equals("set") || command.equals("to")) {
			return setVar(args);
		}
		return null;
	}
	
	private sLogoValid setVar(String[] args){
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[1]));
		if (myModel.getVariable(args[0]).getError()){
			myModel.deleteVariable(args[0]);
		}
		myModel.addVariable(args[0], temp);
		return temp;
	}
	
	

}
