package frontend.components;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;
import frontend.IDEBuilder;
import javafx.animation.FadeTransition;
import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.geometry.Pos;
import javafx.scene.Group;
import javafx.scene.Node;
import javafx.scene.control.Label;
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
import javafx.util.Duration;

/**
 * TurtleDisplayer
 * Displays the turtle on screen as well as error messages.
 * @author Marcus Oertle
 *
 */
public class TurtleDisplayer implements ComponentBuilder{
	private static final String TURTLE_IMAGE = "turtleScaled.png";
	private static final double TURTLE_SIZE = 50;
	private static final double DEFAULT_WINDOW_X = 400;
	private static final double DEFAULT_WINDOW_Y = 560;
//	private static final int FRAMES_PER_SECOND = 60;
//	private static final int MILLISECOND_DELAY = 1000 / FRAMES_PER_SECOND;
//	private static final double SECOND_DELAY = 1.0 / FRAMES_PER_SECOND;
	private static final Paint ERROR_BOX_COLOR = Color.RED;
	
	private static Pane group = new Pane();
	private ArrayList<ImageView> turtles = new ArrayList<ImageView>();
	private HashMap<ImageView, Set<Line>> lineMap=  new HashMap<ImageView, Set<Line>>();
	private double center_x = DEFAULT_WINDOW_X/2-TURTLE_SIZE/2;
	private static double center_y = DEFAULT_WINDOW_Y/2-TURTLE_SIZE/2;
//	private double center_x;
//	private double center_y;
	private static Text errorMessage;
	private static Rectangle redBox;
//	private double groupX;
//	private double groupY;
	private Boolean turtleHidden = false;
	
	/**
	 * TurtleDisplayer
	 * sets background color, resets turtle to starting position, starts animation keyframe
	 */
	public TurtleDisplayer() {
		//group.setStyle("-fx-background-color: #9999FF;");
		setBackgroundColor("#9999FF");
		reset();
		
		displayError("Test Error: Too much DogeCoin");	
		
		//startResizeLoop();
	}

	/**
	 * getNode
	 * @returns Node
	 * @see frontend.components.ComponentBuilder#getNode()
	 */
	public Node getNode() {
		return group;
	}
	
	/**
	 * draw - draws a new turtle from a given turtle set
	 */
	public void draw(Set<Turtle> s){
	    eraseCurrentDisplay();
	    drawNewDisplay(s);
	}
	
	/**
	 * clearError - removes error bar and text from screen
	 */
	public static void clearError() {
		group.getChildren().remove(errorMessage);
		group.getChildren().remove(redBox);
	}
	
	/**
	 * setBackgroundColor - sets the background color with input string in format "#9999FF"
	 * @param hexColor (string of format "#9999FF" for the color)
	 */
	private void setBackgroundColor(String hexColor) {
		Color background_color = Color.valueOf(hexColor);
		group.setBackground(new Background(new BackgroundFill(background_color, null, null)));
	}
	
	/**
	 * eraseCurrentDisplay - erases the current display completely
	 */
	private void eraseCurrentDisplay(){
		turtles.clear();
		lineMap.clear();
	    group.getChildren().clear();
	}

	/**
	 * drawNewDisplay - draws new display
	 * @param Set<turtle>
	 */
	private void drawNewDisplay(Set<Turtle> s, SLogoValid v){
	    for(Turtle t : s){
	    	ImageView turtleView = drawTurtle(t.getX() + center_x, -1 * t.getY() + center_y, t.getAngle());
	    	group.getChildren().add(turtleView);
	        if(!t.getLinesSet.isEmpty()){
	        	lineMap.put(turtleView, t.getLinesSet);
	            drawLines(t.getLinesSet);
	        }
	    }
	}

	/**
	 * drawLines - adds the turtle's lines to the group
	 * @oaram Set<Line>
	 */
	private void drawLines(Set<Line> lines) {
		for(Line l : lines) {
			group.getChildren().add(l);
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
	 * 
	 */
	private void reset() {
		showTurtle();
		eraseCurrentDisplay();
		ImageView turtleView = drawTurtle(DEFAULT_WINDOW_X/2, DEFAULT_WINDOW_Y/2, 0);
		group.getChildren().addAll(turtleView);	
	}
	
	/**
	 * showTurtle - shows the turtle if hidden
	 */
	private void showTurtle() {
		if(turtleHidden) {
			for(ImageView i : turtles) {
				group.getChildren().add(i);
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
				group.getChildren().remove(i);
			}
			turtleHidden = true;
		}
	}
	
	/**
	 * Displays given error message
	 * @param message
	 */
	public static void displayError(String message) {
		errorMessage = new Text(message);
		errorMessage.setX(0);
		errorMessage.setY(2*center_y + 48);
		redBox = new Rectangle(0, 2*center_y+35, errorMessage.getLayoutBounds().getWidth(), errorMessage.getLayoutBounds().getHeight());
		redBox.setFill(ERROR_BOX_COLOR);
		group.getChildren().add(redBox);
		group.getChildren().add(errorMessage);	
		
		
		// OPTIONAL FADE AWAY
		//FadeTransition ft = new FadeTransition(Duration.millis(time*1000), errorMessage);
		//ft.setFromValue(1.0);
		//ft.setToValue(0);
		//ft.setCycleCount(1);
		//ft.play();
	}
	
//	/**
//	 * startResizeLoop - starts an animation loop where turtles move with window size
//	 */
//	private void startResizeLoop() {
//		// animation if needed to scale UI, delete otherwise
//		KeyFrame frame = new KeyFrame(Duration.millis(MILLISECOND_DELAY),
//				e -> step(SECOND_DELAY));
//		Timeline animation = new Timeline();
//		animation.setCycleCount(Timeline.INDEFINITE);
//		animation.getKeyFrames().add(frame);
//		animation.play();
//	}
//	
//	/**
//	 * step - updates turtle locations to attempt to scale with screen
//	 */
//	private void step(double elapsedTime) {
//		// if need to update UI to scale, use this
//		//System.out.println(group.getBoundsInLocal());
//		if(!(groupX == group.getBoundsInLocal().getMaxX()) || !(groupY == group.getBoundsInLocal().getMaxY())) {
//			groupX = group.getBoundsInLocal().getMaxX();
//			groupY = group.getBoundsInLocal().getMaxY();
//			center_x = groupX/2 - TURTLE_SIZE/2;
//			center_y = groupY/2 - TURTLE_SIZE/2;
//			double xRatio = center_x/prev_center_x;
//			double yRatio = center_y / prev_center_y;
//			try {
//				for(ImageView i : turtles) {
//					i.setX(i.getX()*xRatio);
//					i.setY(i.getY()*yRatio);
//				}
////				errorMessage.setX(errorMessage.getX()*xRatio);
////				errorMessage.setY(errorMessage.getY()*yRatio);
////				redBox.setX(redBox.getX()*xRatio);
////				redBox.setY(redBox.getY()*yRatio);
//			} catch(Exception e){
//				System.out.println("Error in step function, likely concurrent modification. Is okay.");
//			}
//			prev_center_x = center_x;
//			prev_center_y = center_y;
//		}	
//	}
}
