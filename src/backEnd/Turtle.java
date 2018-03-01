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
	
	public static double DISPLAY_HEIGHT = 435;
	public static double DISPLAY_WIDTH = 1000;
	
	private String myTurtleImage = "turtleScaled.png";
	private ImageView myTurtleDisplay;
	protected double myXPos;
	protected double myYPos;
	protected double myAngle;
	private Set<Line> myTraces = new HashSet<Line>();
	private Pen myPen;
	protected boolean isPenDown = true;
	protected boolean isVisible = true;
	
	public Turtle(double xpos, double ypos, double angle) {
		myXPos = xpos;
		myYPos = ypos;
		myAngle = angle;
		myPen = new Pen();
		myTurtleDisplay = makeTurtle();
		myTraces = new HashSet<>();
	}
	
	public Turtle(double xpos, double ypos, double angle, Paint color) {
		myXPos = xpos;
		myYPos = ypos;
		myAngle = angle;
		myPen = new Pen(color);
		myTurtleDisplay = makeTurtle();
		myTraces = new HashSet<>();
	}

	public ImageView getTurtle() {
		return myTurtleDisplay;
	}
	
	public Set<Line> getTraces() {
		return Collections.unmodifiableSet(myTraces);
	}
	
	private ImageView makeTurtle() {
		Image img = new Image(myTurtleImage);
		ImageView turtle = new ImageView(img);
		turtle.setX(myXPos);
		turtle.setY(myYPos);
		turtle.setRotate(myAngle);
		return turtle;
	}
	
	protected void setTurtleImage(String filepath) {
		myTurtleImage = filepath;
		makeTurtle();
	}
	
	protected double moveTo(double xpos, double ypos) {
		if (isPenDown) {
			myTraces.add(myPen.draw(myXPos, myYPos, xpos, ypos));
		}
		double dist = Math.pow(Math.pow(xpos - myXPos, 2) + Math.pow(ypos - myYPos, 2), 0.5);
		myXPos = xpos;
		myYPos = ypos;
		myTurtleDisplay = makeTurtle();
		return dist;
	}
	
	protected double move(double distance) {
		// TO-DO: account for toroidal edge
		double xpos = myXPos + Math.sin(Math.toRadians(myAngle))*distance;
		double ypos = myYPos + Math.cos(Math.toRadians(myAngle))*distance;
		this.moveTo(xpos, ypos);
		return distance;
	}
	
	protected double rotateTowards(double xpos, double ypos) {
		double angle = Math.atan((ypos-myYPos)/(xpos-myXPos));
		myAngle+=angle;
		myTurtleDisplay.setRotate(myAngle);
		return angle;
	}
	
	protected double rotateTo(double deg) {
		double degree = deg;
		myAngle = degree;
		myTurtleDisplay.setRotate(myAngle);
		return deg;
	}
	
	protected void rotate(double deg) {
		myAngle += deg;
		myTurtleDisplay.setRotate(myAngle);
	}

	protected void showTurtle(){
		myTurtleDisplay.setImage(new Image(myTurtleImage));
		isVisible = true;
	}

	protected void hideTurtle(){
		myTurtleDisplay.setImage(null);
		isVisible = false;
	}
	
	protected void penUp() {
		isPenDown = false;
	}
	
	protected void penDown() {
		isPenDown = true;
	}
	
	protected void clearTraces() {
		myTraces.clear();
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
