package backEnd;

public class UserDefinedCommand extends CommandGroup{
	private ModelModifiable myModel;

	public UserDefinedCommand(String command, String[] args, ModelModifiable model) {
		super(command, args);
		myModel = model;
		//this.mySlogoValid = run(command, args);
	}
/*
	@Override
	public sLogoValid execute() {
		return this.mySlogoValid;
	}

	private sLogoValid run(String command, String[] args){
		if (command.equals("to")) {
			return setCommand(args);
		}
		return null;
	}

	private sLogoValid setCommand(String[] args){
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[1]));
		try {
			myModel.getVariable(args[0]).getError();
			myModel.deleteVariable(args[0]);
		} catch (Exception e) {
			//NADA, this just means the variable just doesn't exist
		}
		myModel.addVariable(args[0], temp);
		return temp;
	}
*/
}
