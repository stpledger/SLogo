package frontend.components;

import java.util.ArrayList;
import java.util.Set;

import frontend.IDEBuilder;
import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.geometry.Pos;
import javafx.scene.Group;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Pane;
import javafx.scene.shape.Line;
import javafx.scene.text.Text;
import javafx.util.Duration;

public class TurtleDisplayer implements ComponentBuilder{
	private static final String TURTLE_IMAGE = "turtleScaled.png";
	private static final double TURTLE_SIZE = 50;
	private static final double DEFAULT_WINDOW_X = 400;
	private static final double DEFAULT_WINDOW_Y = 560;
	private static final int FRAMES_PER_SECOND = 60;
	private static final int MILLISECOND_DELAY = 1000 / FRAMES_PER_SECOND;
	private static final double SECOND_DELAY = 1.0 / FRAMES_PER_SECOND;
	
	private Pane group = new Pane();
	private ArrayList<ImageView> viewables = new ArrayList<ImageView>();
	private double prev_center_x = DEFAULT_WINDOW_X/2-TURTLE_SIZE/2;
	private double prev_center_y = DEFAULT_WINDOW_Y/2-TURTLE_SIZE/2;
	private double center_x;
	private double center_y;
	
	public TurtleDisplayer() {
		group.setStyle("-fx-background-color: #9999FF;");
		ImageView turtleView = drawTurtle(DEFAULT_WINDOW_X/2, DEFAULT_WINDOW_Y/2, 0);
		group.getChildren().addAll(turtleView);

		// animation if needed to scale UI, delete otherwise
		KeyFrame frame = new KeyFrame(Duration.millis(MILLISECOND_DELAY),
				e -> step(SECOND_DELAY));
		Timeline animation = new Timeline();
		animation.setCycleCount(Timeline.INDEFINITE);
		animation.getKeyFrames().add(frame);
		animation.play();
		
	}

	public Node getNode() {
		return group;
	}
	
	public void draw(Set<Turtle> s){
	    eraseCurrentDisplay();
	    drawNewDisplay(s);
	}

	private void step(double elapsedTime) {
		// if need to update UI to scale, use this
		//System.out.println(group.getBoundsInLocal());
		center_x = group.getBoundsInLocal().getMaxX()/2 - TURTLE_SIZE/2;
		center_y = group.getBoundsInLocal().getMaxY()/2 - TURTLE_SIZE/2;
		double xRatio = center_x/prev_center_x;
		double yRatio = center_y / prev_center_y;
		try {
			for(ImageView i : viewables) {
				i.setX(i.getX()*xRatio);
				i.setY(i.getY()*yRatio);
			}
		} catch(Exception e){
			System.out.println("Error in step function, likely concurrent modification. Is okay.");
		}
		prev_center_x = center_x;
		prev_center_y = center_y;
	}
	
	private void eraseCurrentDisplay(){
		viewables.clear();
	    group.getChildren().clear();
	}

	private void drawNewDisplay(Set<Turtle> s){
	    for(Turtle t : s){
	        drawTurtle(t.getX(), t.getY(), t.getAngle());
	        if(!t.getLinesSet.isEmpty()){
	            drawLines(t.getLinesSet);
	        }
	    }
	}

	private void drawLines(Set<Line> lines) {
		for(Line l : lines) {
			group.getChildren().add(l);
		}		
	}
	
	private ImageView drawTurtle(double x, double y, double angle) {
		Image turtleImage = new Image(getClass().getClassLoader().getResourceAsStream(TURTLE_IMAGE));
		ImageView turtleView = new ImageView(turtleImage);
		turtleView.setX(x-TURTLE_SIZE/2);
		turtleView.setY(y-TURTLE_SIZE/2);
		turtleView.setRotate(angle);
		//System.out.println(turtleView.getX());
		//System.out.println(turtleView.getY());
		viewables.add(turtleView);
		return turtleView;
	}
	
}
