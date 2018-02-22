package frontend.components;

import javafx.scene.Group;
import javafx.scene.Node;
import javafx.scene.control.Label;

public class TurtleDisplayer implements ComponentBuilder{
	
	private Group group = new Group();
	
	public TurtleDisplayer() {
		group.setStyle("-fx-background-color: #9999FF;");
		group.getChildren().add(new Label("Turtle Display"));
	}

	public Node getNode() {
		return group;
	}
}
