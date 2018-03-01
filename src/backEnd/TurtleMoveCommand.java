package backEnd;

import java.util.Set;

public class TurtleMoveCommand extends CommandGroup {
	private ModelModifiable myModel;

	public TurtleMoveCommand(String command, String[] args, ModelModifiable model) {
		super(command, args);
		myModel = model;
		this.mySlogoValid = run(command, args, myModel);
	}

	@Override
	public sLogoValid execute() {
		return this.mySlogoValid;
	}

	public sLogoValid run(String command, String[] args, ModelModifiable myModel){
		switch (command){
			case "fd":
				return forward(args, myModel);
			case "bk":
				return back(args, myModel);
			case "lt":
				return left(args, myModel);
			/*case "rt":
				return right(args, myModel);
			case "seth":
				return setHeader(args, myModel);
			case "towards":
				return towards(args, myModel);
			case "goto":
				return goTo(args, myModel);
			case "pd":
				return pendown(myModel);
			case "pu":
				return penup(myModel);
			case "st":
				return showTurtle(myModel);
			case "ht":
				return hideTurtle(myModel);
			case "home":
				return home(args, myModel);
			case "cs":
				return clearScreen(args, myModel);*/
			default:
				sLogoValid noExecute = new sLogoValid();
				noExecute.setError(true);
				noExecute.setMyStringValue("No command run");
				return noExecute;
		}
	}

	private sLogoValid forward(String[] args, ModelModifiable model){
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			t.move(Double.parseDouble(args[0]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid back(String[] args, ModelModifiable model){
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			t.move(-1 * Double.parseDouble(args[0]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid left(String[] args, ModelModifiable model){
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			t.rotate(-1 * Double.parseDouble(args[0]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}
}
