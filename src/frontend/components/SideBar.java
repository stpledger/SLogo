package frontend.components;

import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

public class SideBar extends Node {
	private VBox host = new VBox();
	
	public SideBar() {
		host.setStyle("-fx-background-color: #F0591E;");
		host.getChildren().add(new Label("Hello"));
	}
	
	public Node getNode() {
		return host;
	}
}
