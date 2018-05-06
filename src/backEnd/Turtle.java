package backEnd;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.paint.Color;
import javafx.scene.paint.Paint;
import javafx.scene.shape.Line;

/**
 * Turtle object class
 * @author Siyuan
 *
 */
public class Turtle {

	private String myTurtleImage = "turtleScaled.png";
	private Set<Turtle> myStamps;
	private ImageView myTurtleDisplay;
	protected double myXPos;
	protected double myYPos;
	protected double myAngle;
	protected int myID;
	protected boolean isActive = true;
	private Set<Line> myTraces = new HashSet<Line>();
	private Pen myPen;
	protected boolean isPenDown = true;
	protected boolean isVisible = true;
	
	public Turtle(double xpos, double ypos, double angle, int id) {
		myXPos = xpos;
		myYPos = ypos;
		myAngle = angle;
		myID = id;
		myPen = new Pen();
		myTurtleDisplay = makeTurtle();
		myTraces = new HashSet<>();
		myStamps = new HashSet<>();
	}

	/**
	 * give the frontend the turtle to display
	 * @return
	 */
	public ImageView getTurtle() {
		return myTurtleDisplay;
	}
	
	/**
	 * give the frontend traces
	 * @return traces of this turtle
	 */
	public Set<Line> getTraces() {
		return Collections.unmodifiableSet(myTraces);
	}
	
	private ImageView makeTurtle() {
		Image img = new Image(myTurtleImage);
		ImageView turtle = new ImageView(img);
		if(!isVisible){
			turtle.setImage(null);
		}
		turtle.setX(myXPos);
		turtle.setY(myYPos);
		turtle.setRotate(myAngle);
		System.out.println(myXPos);
		System.out.println(myYPos + "\n");
		return turtle;
	}
	
	/**
	 * allow UI to set a turtle image using image's filepath
	 * @param filepath
	 */
	public void setTurtleImage(String filepath) {
		System.out.println("Path:" + filepath);
		
		myTurtleImage = filepath;
		makeTurtle();
	}
	
	protected double moveTo(double xpos, double ypos) {
		double xBound = 470;
		double yBound = 200;
		double xPosFinal = xpos;
		double yPosFinal = ypos;
		double xPosPrev = xpos;
		double yPosPrev = ypos;
		boolean toDraw = true;
		while(xPosFinal > xBound || xPosFinal < -xBound ||
				yPosFinal > yBound || yPosFinal < -yBound){
			if(xPosFinal > xBound){
				xPosFinal = (-xBound + (xPosFinal % xBound));
			}
			else if(xPosFinal < -xBound){
				xPosFinal = (xBound + (xPosFinal% -xBound));
			}
			else if(yPosFinal > yBound){
				yPosFinal = (-yBound + (yPosFinal % yBound));
			}
			else if(yPosFinal < -yBound){
				yPosFinal = (yBound + (yPosFinal % -yBound));
			}
			xPosPrev = xPosFinal;
			yPosPrev= yPosFinal;
			toDraw = false;
		}
		if (isPenDown && toDraw){
			myTraces.add(myPen.draw(myXPos, myYPos, xPosFinal, yPosFinal));
		}
		double dist = Math.pow(Math.pow(xPosFinal - myXPos, 2) + Math.pow(yPosFinal - myYPos, 2), 0.5);
		myXPos = xPosFinal;
		myYPos = yPosFinal;
		myTurtleDisplay = makeTurtle();
		return dist;
	}
	
	public double move(double distance) {
		// TO-DO: account for toroidal edge
		double modifiedDistance = distance;
		double xpos;
		double ypos;
		int incr = 20;
		for(int i = 0; i < Math.floor(distance/incr); i++){
			xpos = myXPos + Math.sin(Math.toRadians(myAngle))*incr;
			ypos = myYPos + Math.cos(Math.toRadians(myAngle))*incr;
			this.moveTo(xpos, ypos);
			modifiedDistance -= incr;
		}
		xpos = myXPos + Math.sin(Math.toRadians(myAngle))*modifiedDistance;
		ypos = myYPos + Math.cos(Math.toRadians(myAngle))*modifiedDistance;
		this.moveTo(xpos, ypos);
		return distance;
	}
	
	protected double rotateTowards(double xpos, double ypos) {
		double angle = Math.atan((ypos-myYPos)/(xpos-myXPos));
		myAngle+=angle;
		myTurtleDisplay.setRotate(myAngle);
		this.moveTo(myXPos, myYPos);
		return angle;
	}
	
	protected double rotateTo(double deg) {
		double degree = deg;
		myAngle = degree;
		myTurtleDisplay.setRotate(myAngle);
		this.moveTo(myXPos, myYPos);
		return deg;
	}
	
	protected void rotate(double deg) {
		myAngle += deg;
		myTurtleDisplay.setRotate(myAngle);
		this.moveTo(myXPos, myYPos);
	}

	protected void showTurtle(){
		// TO-DO
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
	
	protected void setPenColor(Paint color) {
		this.myPen.setColor(color);
	}
	
	protected void setPenSize(double size) {
		this.myPen.setSize(size);
	}
	
	private class Pen {
		
		private Paint myPenColor;
		private double myPenSize = 1.0;
		
		private Pen() {
			myPenColor = Color.BLACK;
		}
		
		private void setColor(Paint color) {
			myPenColor = color;
		}
		
		private void setSize(double size) {
			myPenSize = size;
		}
		
		private Line draw(double xpos1, double ypos1, double xpos2, double ypos2) {
			Line ret = new Line(xpos1, ypos1, xpos2, ypos2);
			ret.setStroke(myPenColor);
			ret.setStrokeWidth(myPenSize);
			return ret;
		}
	}
	
	/**
	 * allow the turtle's information to be displayed by the frontend
	 */
	public String toString() {
		DecimalFormat df = new DecimalFormat("#.###");
		df.setRoundingMode(RoundingMode.CEILING);
		String rets = "";
		rets += "X:       " + df.format(myXPos);
		rets += "\nY:      " + df.format(myYPos);
		rets += "\nAngle:  " + df.format(myAngle % 360);
		rets += "\nPen Down:  " + isPenDown;
		return rets;
	}

	public Set<Turtle> getStamps(){
		return myStamps;
	}

	public void addStamp(){
		double x = myXPos;
		double y = myYPos;
		double ang = myAngle;
		Turtle turtle = new Turtle(x, y, ang, 100);
		myStamps.add(turtle);
	}

	public void clearStamps(){
		myStamps.clear();
	}
}
