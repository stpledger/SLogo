package frontend.components;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import frontend.IDEBuilder;
import javafx.collections.ObservableList;
import javafx.scene.Node;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.layout.HBox;

public class ToolBar implements ComponentBuilder{
	private HBox bar = new HBox();
	private IDEBuilder builder;
	String[] languages = {"English", "German", "French", "Spanish"};
	private ComboBox languagePicker = new ComboBox((ObservableList)Arrays.asList(languages));
	private Button updateEnvButton = new Button("Update");
	public ToolBar(IDEBuilder b) {
		builder = b;
		bar.setStyle("-fx-background-color: #FF9999;");
		bar.setPrefHeight(IDEBuilder.TOOLBAR_HEIGHT);
	}
	
	public Node getNode() {
		return bar;
	}
	
	public String getLanguage() {
		return "English";
	}
	
	public void addComponents() {
		List<Node> toAdd = new ArrayList<>();
		
		toAdd.add(languagePicker);
		
		updateEnvButton.setOnAction(e -> builder.update());
		toAdd.add(updateEnvButton);
	}
	
	
}
