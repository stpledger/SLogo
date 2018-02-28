package frontend.components;

import java.util.ArrayList;
import java.util.List;

import frontend.IDEBuilder;
import javafx.event.ActionEvent;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.ColorPicker;
import javafx.scene.control.ComboBox;
import javafx.scene.layout.HBox;
import javafx.scene.paint.Color;
import javafx.stage.Stage;

public class ToolBar implements ComponentBuilder{
	private HBox bar = new HBox();
	private IDEBuilder builder;
	
	String[] languages = {"English", "German", "French", "Spanish"};
	private Color turtleColor = Color.ALICEBLUE;
	private ComboBox<String> languagePicker = new ComboBox<String>();
	private Button updateEnvButton = new Button("Update");
	private Button selectColor = new Button("Select Color");
	
	public ToolBar(IDEBuilder b) {
		builder = b;
		setStyle();
		addComponents();
	}
	
	public Node getNode() {
		return bar;
	}
	
	public String getLanguage() {
		return "English";
	}
	
	public String getColor() {
		String col = turtleColor.toString();
		return col;
	}
	
	private void setStyle() {
		bar.setSpacing(10);
		bar.setStyle("-fx-background-color: #FF9999;");
		bar.setPrefHeight(IDEBuilder.TOOLBAR_HEIGHT);
	}
	
	private void addComponents() {
		List<Node> toAdd = new ArrayList<>();
		
		languagePicker.getItems().addAll(languages);
		languagePicker.setValue("English");
		toAdd.add(languagePicker);
		
		selectColor.setOnAction(this::createColorPickerWindow);
		toAdd.add(selectColor);
		
		updateEnvButton.setOnAction(e -> builder.update());
		toAdd.add(updateEnvButton);
		
		bar.getChildren().addAll(toAdd);
	}
	
	private void createColorPickerWindow(ActionEvent e) {
		Stage pickerStage = new Stage();
		ColorPicker picker = new ColorPicker();
		Scene pickerScene = new Scene(picker);
		pickerStage.setScene(pickerScene);
		pickerStage.show();
		picker.setOnAction(pe -> {turtleColor = picker.getValue(); pickerStage.close(); System.out.println(turtleColor); builder.update();});
	}
	
	
}
