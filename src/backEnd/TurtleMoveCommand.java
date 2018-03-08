package backEnd;

import javafx.scene.image.Image;
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
				return forward(args);
			case "bk":
				return back(args);
			case "lt":
				return left(args);
			case "rt":
				return right(args);
			case "seth":
				return setHeading(args);
			case "towards":
				return towards(args);
			case "goto":
				return goTo(args);
			case "pd":
				return penDown();
			case "pu":
				return penUp();
			case "st":
				return showTurtle();
			case "ht":
				return hideTurtle();
			case "home":
				return home();
			case "cs":
				return clearScreen();
			default:
				sLogoValid noExecute = new sLogoValid();
				noExecute.setError(true);
				noExecute.setMyStringValue("No command run");
				return noExecute;
		}
	}

	private sLogoValid forward(String[] args){
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			t.move(Double.parseDouble(args[0]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid back(String[] args){
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			t.move(-1 * Double.parseDouble(args[0]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid left(String[] args){
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			t.rotate(-1 * Double.parseDouble(args[0]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid right(String[] args){
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			t.rotate(Double.parseDouble(args[0]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid setHeading(String[] args){
		Set<Turtle> turtles = myModel.getTurtles();
		double out = 0;
		for(Turtle t : turtles){
			out = t.rotateTo(Double.parseDouble(args[0]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid towards(String[] args){
		Set<Turtle> turtles = myModel.getTurtles();
		double out = 0;
		for(Turtle t : turtles){
			out = t.rotateTowards(Double.parseDouble(args[0]), Double.parseDouble(args[1]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid goTo(String[] args) {
		Set<Turtle> turtles = myModel.getTurtles();
		double out = 0;
		for (Turtle t : turtles) {
			out = t.moveTo(Double.parseDouble(args[0]), Double.parseDouble(args[1]));
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid penDown() {
		Set<Turtle> turtles = myModel.getTurtles();
		for (Turtle t : turtles) {
			t.penDown();
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(1);
		return temp;
	}

	private sLogoValid penUp() {
		Set<Turtle> turtles = myModel.getTurtles();
		for (Turtle t : turtles) {
			t.penUp();
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(0);
		return temp;
	}

	private sLogoValid hideTurtle() {
		Set<Turtle> turtles = myModel.getTurtles();
		for (Turtle t : turtles) {
			t.hideTurtle();
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(0);
		return temp;
	}

	private sLogoValid showTurtle() {
		Set<Turtle> turtles = myModel.getTurtles();
		for (Turtle t : turtles) {
			t.showTurtle();
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(1);
		return temp;
	}

	private sLogoValid home() {
		Set<Turtle> turtles = myModel.getTurtles();
		double out = 0;
		for (Turtle t : turtles) {
			out = t.moveTo(0,0);
		}
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid clearScreen() {
		Set<Turtle> turtles = myModel.getTurtles();
		sLogoValid temp = home();
		setHeading(new String[]{"0"});
		for (Turtle t : turtles) {
			t.clearTraces();
		}
		return temp;
	}
}
