package backEnd;

import javafx.scene.image.Image;
import java.util.Set;

public class TurtleMoveCommand extends CommandGroup {
	private Turtle Turtle;

	public TurtleMoveCommand(String command, String[] args, Turtle turtle) {
		super(command, args);
		Turtle = turtle;
		this.mySlogoValid = run(command, args);
	}

	@Override
	public sLogoValid execute() {
		return this.mySlogoValid;
	}

	public sLogoValid run(String command, String[] args){
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
		Turtle.move(Double.parseDouble(args[0]));
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid back(String[] args){
		Turtle.move(-1 * Double.parseDouble(args[0]));
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid left(String[] args){
		Turtle.rotate(-1 * Double.parseDouble(args[0]));
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid right(String[] args){
		Turtle.rotate(Double.parseDouble(args[0]));
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(Double.parseDouble(args[0]));
		return temp;
	}

	private sLogoValid setHeading(String[] args){
		double out = 0;
		out = Turtle.rotateTo(Double.parseDouble(args[0]));
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid towards(String[] args){
		double out = 0;
		out = Turtle.rotateTowards(Double.parseDouble(args[0]), Double.parseDouble(args[1]));
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid goTo(String[] args) {
		double out = 0;
		out = Turtle.moveTo(Double.parseDouble(args[0]), Double.parseDouble(args[1]));
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid penDown() {
		Turtle.penDown();
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(1);
		return temp;
	}

	private sLogoValid penUp() {
		Turtle.penUp();
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(0);
		return temp;
	} 

	private sLogoValid hideTurtle() {
		Turtle.hideTurtle();
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(0);
		return temp;
	}

	private sLogoValid showTurtle() {
		Turtle.showTurtle();
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(1);
		return temp;
	}

	private sLogoValid home() {
		double out = 0;
		out = Turtle.moveTo(0,0);
		sLogoValid temp = new sLogoValid();
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid clearScreen() {
		sLogoValid temp = home();
		setHeading(new String[]{"0"});
		Turtle.clearTraces();
		return temp;
	}
}
