package backEnd;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.paint.Color;
import javafx.scene.paint.Paint;
import javafx.scene.shape.Line;

public class Turtle {
	
	public static String TURTLE_IMAGE = "turtleScaled.png";
	private ImageView myTurtleDisplay;
	private double myXPos;
	private double myYPos;
	private double myAngle;
	private Set<Line> myTraces;
	private Pen myPen;
	private boolean isPenDown = true;
	
	public Turtle(double xpos, double ypos, double angle) {
		myXPos = xpos;
		myYPos = ypos;
		myAngle = angle;
		myPen = new Pen();
		myTurtleDisplay = makeTurtle();
	}
	
	public Turtle(double xpos, double ypos, double angle, Paint color) {
		myXPos = xpos;
		myYPos = ypos;
		myAngle = angle;
		myPen = new Pen(color);
		myTurtleDisplay = makeTurtle();
	}

	public ImageView getTurtle() {
		return myTurtleDisplay;
	}
	
	public Set<Line> getTraces() {
		return Collections.unmodifiableSet(myTraces);
	}
	
	private ImageView makeTurtle() {
		Image img = new Image(TURTLE_IMAGE);
		ImageView turtle = new ImageView(img);
		turtle.setX(myXPos);
		turtle.setY(myYPos);
		turtle.setRotate(myAngle);
		myTraces = new HashSet<>();
		return turtle;
	}
	
	protected double moveTo(double xpos, double ypos) {
		if (isPenDown) {
			myTraces.add(myPen.draw(myXPos, myYPos, xpos, ypos));
		}
		double dist = Math.pow(Math.pow(xpos - myXPos, 2) + Math.pow(ypos - myYPos, 2), 0.5);
		myXPos = xpos;
		myYPos = ypos;
		return dist;
	}
	
	protected double move(double distance) {
		// account for toroidal edge
		double xpos = myXPos - Math.cos(Math.toRadians(myAngle))*distance;
		double ypos = myYPos + Math.sin(Math.toRadians(myAngle))*distance;
		this.moveTo(xpos, ypos);
		return distance;
	}
	
	protected double rotateTowards(double xpos, double ypos) {
		//double angle = Math.atan(a)
		return 0;
	}
	
	protected double rotateTo(double deg) {
		//TO-DO
		return 0;
	}
	
	protected void rotate(double deg) {
		myAngle += deg;
		while (myAngle >= 360) {
			myAngle -= 360;
		}
		myTurtleDisplay.setRotate(deg);
	}
	
	protected void penUp() {
		isPenDown = false;
	}
	
	protected void penDown() {
		isPenDown = true;
	}
	
	private class Pen {
		
		private Paint myPenColor;
		
		private Pen() {
			myPenColor = Color.BLACK;
		}
		
		private Pen(Paint color) {
			myPenColor = color;
		}
		
		private Line draw(double xpos1, double ypos1, double xpos2, double ypos2) {
			Line ret = new Line(xpos1, ypos1, xpos2, ypos2);
			ret.setStroke(myPenColor);
			return ret;
		}
		
	}
}
