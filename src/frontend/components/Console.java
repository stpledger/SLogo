package frontend.components;

import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

public class Console implements ComponentBuilder{
	
	private VBox box = new VBox();
	
	public Console () {
		box.setStyle("-fx-background-color: #7777FF;");
		Label label = new Label("Console");
		label.setPrefSize(5000, 200);
		box.getChildren().add(label);
	}
	@Override
	public Node getNode() {
		// TODO Auto-generated method stub
		return box;
	}
	

}
