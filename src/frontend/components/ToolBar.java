package frontend.components;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

import backEnd.ModelViewable;
import backEnd.Turtle;
import frontend.IDEBuilder;
import javafx.event.ActionEvent;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.ColorPicker;
import javafx.scene.control.ComboBox;
import javafx.scene.control.TextField;
import javafx.scene.layout.HBox;
import javafx.scene.paint.Color;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

public class ToolBar implements ComponentBuilder{
	private HBox bar = new HBox();
	private IDEBuilder builder;
	
	String[] languages = {"English", "German", "French", "Spanish"};
	private Color turtleColor = Color.SLATEBLUE;
	
	private ComboBox<String> languagePicker = new ComboBox<String>();
	private ComboBox<String> turtleImagePicker = new ComboBox<String>();
	private Button selectImage = new Button("Select Image");
	
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
		return turtleColor.toString();
	}
	
	private void setStyle() {
		bar.setSpacing(10);
		bar.setStyle("-fx-background-color: #EEEEEE;");
		bar.setPrefHeight(IDEBuilder.TOOLBAR_HEIGHT);
	}
	
	private void addComponents() {
		List<Node> toAdd = new ArrayList<>();
		
		languagePicker.getItems().addAll(languages);
		languagePicker.setValue("English");
		toAdd.add(languagePicker);
		
		selectColor.setOnAction(this::createColorPickerWindow);
		toAdd.add(selectColor);
		
		turtleImagePicker.setValue("Select Turtle Name");
		toAdd.add(turtleImagePicker);
		
		selectImage.setOnAction(this::updateImagePath);
		toAdd.add(selectImage);
		
//		toAdd.add(imagePath);
//		
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
	
	private void updateImagePath(ActionEvent e) {
		FileChooser fileChooser = new FileChooser();
		File f = fileChooser.showOpenDialog(new Stage());
		String mimetype = "Invalid";
		try {
			mimetype = Files.probeContentType(f.toPath());
			if (mimetype == null) mimetype = "Invalid";
		} catch (IOException e1) {
			// Do nothing
		}
		if (mimetype.contains("image")) {
		    builder.enterConsoleCommand("changeImage " + turtleImagePicker.getValue() + " " + f.getAbsolutePath());
		} else {
			Alert alert = new Alert(AlertType.INFORMATION);
			alert.setTitle("Invalid Image");
			alert.setContentText("The filepath you chose, " + f.getAbsolutePath() + " is not a valid image!");
			alert.showAndWait();
		}
		
	}
	
	
	/*
	 * Update the toolbar to show possible turtles. Should receive modelViewable that is used by the sidebar
	 */
	public void update(ModelViewable m) {
		turtleImagePicker.getItems().clear();
		for (String s: m.getCurrentVariables().keySet()) {
			if (m.getCurrentVariables().get(s) instanceof Turtle) {
				turtleImagePicker.getItems().add(s);
			}
		}
	}
}
