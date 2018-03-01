package backEnd;

public class TurtleQueryCommand extends CommandGroup {
	private ModelModifiable myModel;

	public TurtleQueryCommand(String command, String[] args, ModelModifiable model) {
		super(command, args);
		myModel = model;
		// TODO Auto-generated constructor stub
	}

}
