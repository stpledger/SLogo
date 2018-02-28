package backEnd.commands;

import backEnd.ModelModifiable;

public class TurtleMoveCommand extends CommandGroup {
	private ModelModifiable myModel;

	public TurtleMoveCommand(String command, String[] args, ModelModifiable model) {
		super(command, args);
		myModel = model;
		// TODO Auto-generated constructor stub
	}

}
