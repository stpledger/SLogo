package frontend.components;

import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;

public class ToolBar implements ComponentBuilder{
	private HBox bar = new HBox();
	
	public ToolBar() {
		bar.setStyle("-fx-background-color: #FF9999;");
		bar.getChildren().add(new Label("Toolbar"));
		bar.setMaxHeight(50);
	}
	
	public Node getNode() {
		return bar;
	}
}
