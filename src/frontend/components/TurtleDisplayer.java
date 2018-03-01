package frontend.components;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

import backEnd.Turtle;
import backEnd.sLogoValid;
import frontend.IDEBuilder;
import javafx.scene.Node;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Paint;
import javafx.scene.paint.Color;
import javafx.scene.shape.Line;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Text;

/**
 * TurtleDisplayer
 * Displays the turtle on screen as well as error messages.
 * @author Marcus Oertle
 *
 */
public class TurtleDisplayer implements ComponentBuilder{
	private static final String TURTLE_IMAGE = "turtleScaled.png";
	private static final String DEFAULT_BACKGROUND_COLOR = "#9999FF";
	private static final double TURTLE_SIZE = 50;
	private static final double DEFAULT_WINDOW_X = IDEBuilder.DISPLAY_WIDTH;
	private static final double DEFAULT_WINDOW_Y = IDEBuilder.DISPLAY_HEIGHT;
	private static final double ERROR_MESSAGE_OFFSET = 5;
	private static double center_x = DEFAULT_WINDOW_X/2;
	private static double center_y = DEFAULT_WINDOW_Y/2;
	private static final Paint ERROR_BOX_COLOR = Color.RED;
	private static Pane pane = new Pane();
	private static ArrayList<ImageView> turtles = new ArrayList<ImageView>();
	private static HashMap<ImageView, Set<Line>> lineMap=  new HashMap<ImageView, Set<Line>>();
	private static Text errorMessage;
	private static Rectangle redBox;
	private static Boolean turtleHidden = false;

	/**
	 * TurtleDisplayer
	 * sets background color, resets turtle to starting position, starts animation keyframe
	 */
	public TurtleDisplayer() {
		setBackgroundColor(DEFAULT_BACKGROUND_COLOR);
		reset();
		//changeImage("POKEturtleScaled.png");
		//testTurtleDisplayer();
	}

	/**
	 * getNode
	 * @returns Node
	 * @see frontend.components.ComponentBuilder#getNode()
	 */
	public Node getNode() {
		return pane;
	}

	/**
	 * draw - draws a new turtle from a given turtle set
	 */
	public void draw(Set<Turtle> s, sLogoValid valid){
		eraseCurrentDisplay();
		drawNewDisplay(s, valid);
	}

	/**
	 * clearError - removes error bar and text from screen
	 */
	public void clearError() {
		pane.getChildren().remove(errorMessage);
		pane.getChildren().remove(redBox);
	}

	/**
	 * setBackgroundColor - sets the background color with input string in format "#9999FF"
	 * @param hexColor (string of format "#9999FF" for the color)
	 */
	public void setBackgroundColor(String hexColor) {
		Color background_color = Color.valueOf(hexColor);
		pane.setBackground(new Background(new BackgroundFill(background_color, null, null)));
	}

	/**
	 * eraseCurrentDisplay - erases the current display completely
	 */
	private void eraseCurrentDisplay(){
		turtles.clear();
		lineMap.clear();
		pane.getChildren().clear();
	}

	/**
	 * drawNewDisplay - draws new display
	 * @param Set<turtle>
	 */
	//	private void drawNewDisplay(Set<Turtle> s, sLogoValid v){
	//	    for(Turtle t : s){
	//	    	ImageView turtleView = drawTurtle(t.getX() + center_x, -1 * t.getY() + center_y, t.getAngle());
	//	    	pane.getChildren().add(turtleView);
	//	        if(!t.getLinesSet.isEmpty()){
	//	        	lineMap.put(turtleView, t.getLinesSet);
	//	            drawLines(t.getLinesSet);
	//	        }
	//	    }
	//	}
	private void drawNewDisplay(Set<Turtle> s, sLogoValid v){
		if(v.getError()){
			displayError(v.getMyStringValue());
		}
		for(Turtle t : s){
			ImageView tempTurtle = t.getTurtle();
			System.out.println(tempTurtle.getX());
			System.out.println(tempTurtle.getY());
			tempTurtle.setX(tempTurtle.getX() + center_x - TURTLE_SIZE/2);
			tempTurtle.setY(-1 * tempTurtle.getY() + center_y - TURTLE_SIZE/2);
			pane.getChildren().add(tempTurtle);
			turtles.add(tempTurtle);
			if(!t.getTraces().isEmpty()){
				lineMap.put(tempTurtle, t.getTraces());
				drawLines(t.getTraces());
			}
		}
	}

	/**
	 * drawLines - adds the turtle's lines to the pane
	 * @param Set<Line>
	 */
	private void drawLines(Set<Line> lines) {
		for(Line l : lines) {
			Line tempLine = new Line();
			tempLine.setStartX(l.getStartX() + center_x);
			tempLine.setStartY(-1 * l.getStartY() + center_y);
			tempLine.setEndX(l.getEndX() + center_x);
			tempLine.setEndY(-1 * l.getEndY() + center_y);
			pane.getChildren().add(tempLine);
			pane.getChildren().get(pane.getChildren().size()-1).toBack();
		}		
	}

	/**
	 * drawTurtle - draws a single turtle at specified coordinates and angle
	 * @param x (x location)
	 * @param y (y location)
	 * @param angle (angle in degrees)
	 */
	private ImageView drawTurtle(double x, double y, double angle) {
		Image turtleImage = new Image(getClass().getClassLoader().getResourceAsStream(TURTLE_IMAGE));
		ImageView turtleView = new ImageView(turtleImage);
		turtleView.setX(x-TURTLE_SIZE/2);
		turtleView.setY(y-TURTLE_SIZE/2);
		turtleView.setRotate(angle);
		turtles.add(turtleView);
		return turtleView;
	}

	/**
	 * resets turtle to default position and clears all lines
	 */
	private void reset() {
		showTurtle();
		eraseCurrentDisplay();
		ImageView turtleView = drawTurtle(DEFAULT_WINDOW_X/2, DEFAULT_WINDOW_Y/2, 0);
		pane.getChildren().addAll(turtleView);	
	}

	/**
	 * Change all turtle's images
	 */
	public void changeImage(String path) {
		try {
			Image im = new Image(getClass().getClassLoader().getResourceAsStream(path));
			for(ImageView i : turtles) {
				i.setImage(im);
			}
		} catch(Exception e) {
			
		}
		
	}

	/**
	 * showTurtle - shows the turtle if hidden
	 */
	private void showTurtle() {
		if(turtleHidden) {
			for(ImageView i : turtles) {
				pane.getChildren().add(i);
			}
			turtleHidden = false;
		}
	}

	/**
	 * hideTurtle - hides the turtle if visible
	 */
	private void hideTurtle() {
		if(!turtleHidden) {
			for(ImageView i : turtles) {
				pane.getChildren().remove(i);
			}
			turtleHidden = true;
		}
	}

	/**
	 * Displays given error message
	 * @param message
	 */
	public void displayError(String message) {
		errorMessage = new Text(message);
		errorMessage.setX(0);
		errorMessage.setY(DEFAULT_WINDOW_Y - ERROR_MESSAGE_OFFSET);
		redBox = new Rectangle(0, DEFAULT_WINDOW_Y - errorMessage.getLayoutBounds().getHeight(), 
				errorMessage.getLayoutBounds().getWidth(), errorMessage.getLayoutBounds().getHeight());
		redBox.setFill(ERROR_BOX_COLOR);
		pane.getChildren().add(redBox);
		pane.getChildren().add(errorMessage);	
	}

	/**
	 * Tests the program with other part's components
	 */
	private void testTurtleDisplayer(){
		Turtle testTurtle = new Turtle(50,50,0);
		Turtle testTurtle2 = new Turtle(-50,50,0);
		Set<Turtle> testTurtleSet = new HashSet<Turtle>();
		testTurtleSet.add(testTurtle);
		testTurtleSet.add(testTurtle2);
		sLogoValid valid = new sLogoValid();
		valid.setError(true);
		valid.setMyStringValue("Test Error: 9001 Much Error Such Wow");
		draw(testTurtleSet, valid);

		//line drawing test
		Set<Line> testLineSet = new HashSet<Line>();
		Line testLine = new Line(0,0,50,50);
		Line testLine2 = new Line(0,0,-50,50);
		testLineSet.add(testLine);
		testLineSet.add(testLine2);
		drawLines(testLineSet);
	}
}
