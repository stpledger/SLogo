package backEnd;

import java.util.Set;

public class TurtleQueryCommand extends CommandGroup {
	private ModelModifiable myModel;

	public TurtleQueryCommand(String command, String[] args, ModelModifiable model) {
		super(command, args);
		myModel = model;
		this.mySlogoValid = run(command);
	}

	@Override
	public sLogoValid execute() {
		return this.mySlogoValid;
	}

	public sLogoValid run(String command){
		switch (command){
			case "xcor":
				return xcor();
			case "ycor":
				return ycor();
			case "heading":
				return heading();
			case "pendownp":
				return penDown();
			case "showingp":
				return showing();
			default:
				sLogoValid noExecute = new sLogoValid();
				noExecute.setError(true);
				noExecute.setMyStringValue("No command run");
				return noExecute;
		}
	}

	private sLogoValid xcor(){
		sLogoValid temp = new sLogoValid();
		double out = 0;
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			out = t.myXPos;
		}
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid ycor(){
		sLogoValid temp = new sLogoValid();
		double out = 0;
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			out = t.myYPos;
		}
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid heading(){
		sLogoValid temp = new sLogoValid();
		double out = 0;
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			out = t.myAngle;
		}
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid penDown(){
		sLogoValid temp = new sLogoValid();
		double out = 0;
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			if(t.isPenDown){
				out = 1;
			}
		}
		temp.setMyDoubleValue(out);
		return temp;
	}

	private sLogoValid showing(){
		sLogoValid temp = new sLogoValid();
		double out = 0;
		Set<Turtle> turtles = myModel.getTurtles();
		for(Turtle t : turtles){
			if(t.isVisible){
				out = 1;
			}
		}
		temp.setMyDoubleValue(out);
		return temp;
	}

}
