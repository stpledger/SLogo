package frontend.components;

import frontend.IDEBuilder;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;

public class ToolBar implements ComponentBuilder{
	private HBox bar = new HBox();
	private IDEBuilder builder;
	
	public ToolBar(IDEBuilder b) {
		builder = b;
		bar.setStyle("-fx-background-color: #FF9999;");
		bar.getChildren().add(new Label("Toolbar"));
		bar.setPrefHeight(IDEBuilder.TOOLBAR_HEIGHT);
	}
	
	public Node getNode() {
		return bar;
	}
	
	public String getLanguage() {
		return "English";
	}
}
