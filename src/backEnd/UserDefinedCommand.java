package backEnd;

public class UserDefinedCommand extends CommandGroup{
	private ModelModifiable myModel;

	public UserDefinedCommand(String command, String[] args, ModelModifiable model) {
		super(command, args);
		myModel = model;
		// TODO Auto-generated constructor stub
	}

}
