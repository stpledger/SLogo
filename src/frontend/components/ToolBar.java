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
import javafx.geometry.Insets;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.ColorPicker;
import javafx.scene.control.ComboBox;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

public class ToolBar implements ComponentBuilder{
	private HBox bar = new HBox();
	private IDEBuilder builder;
	
	String[] languages = {"English", "German", "French", "Spanish", "Portuguese", "Russian", "Italian", "Chinese"};
	private Color turtleColor = Color.SLATEBLUE;
	
	private ComboBox<String> languagePicker = new ComboBox<String>();
	private ComboBox<String> turtleImagePicker = new ComboBox<String>();
	private Button selectImage = new Button("Select Image");
	
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
		//return "English";
		return languagePicker.getValue();
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

		
		bar.getChildren().addAll(toAdd);
	}
	
	private void createColorPickerWindow(ActionEvent e) {
		Stage pickerStage = new Stage();
		VBox pallete_box = new VBox();
		for (Integer i: builder.getPallete().keySet()) {
			List<Double> rgb = builder.getPallete().get(i);
			Button colorB = new Button("S");
			Color c = new Color(rgb.get(0) / 256, rgb.get(1) / 256, rgb.get(2) / 256, 1);
			colorB.setBackground(new Background(new BackgroundFill(
                    c, CornerRadii.EMPTY, Insets.EMPTY)));
			colorB.setOnAction(e1 -> {
				turtleColor = c; 
				builder.updateColorIndex(i);
				builder.update();
				pickerStage.close();
//				System.out.println("HUM");
				
			});
			pallete_box.getChildren().add(colorB);
		}
		
//		ColorPicker picker = new ColorPicker();
		Scene pickerScene = new Scene(pallete_box);
		pickerStage.setScene(pickerScene);
		pickerStage.show();
//		picker.setOnAction(pe -> {turtleColor = picker.getValue(); pickerStage.close(); builder.update();});
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
