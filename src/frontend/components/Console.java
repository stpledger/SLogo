package frontend.components;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.Scanner;
import java.util.Set;

import frontend.IDEBuilder;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Node;
import javafx.scene.control.Alert;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import backEnd.Interpreter;
import backEnd.Model;
import backEnd.ModelViewable;
import backEnd.Turtle;
import backEnd.sLogoValid;

/**
 * Console allows user input for commands and will start the rest of the program when run is pressed
 * 
 * It also contains the button for manual control of the turtle as well as a clear prompt button, 
 * open file button, and save file button.
 * 
 * @author Marcus Oertle
 *
 */
public class Console implements ComponentBuilder{
	private static final double BUTTON_SIZE = 75;
	private HBox box = new HBox();
	private String commands;
	private TextArea prompt = new TextArea();
	private TurtleDisplayer turtleDisplayer;
	private Model model;
	private Interpreter interpreter;
	private String language = "English";
	private ResourceBundle commandResources;
	private ResourceBundle uiResources;
	private static final String DEFAULT_RESOURCE_PACKAGE_COMMAND = "resources/languages/";
	private static final String DEFAULT_RESOURCE_PACKAGE_UI = "resources/ui/";
	private IDEBuilder builder;
	private Map<Button, String> buttonMap = new HashMap<Button, String>();
	private String loopCom;

	public Console (TurtleDisplayer t, Model m, Interpreter interpreter2, IDEBuilder b) {
		turtleDisplayer = t;
		model = m;
		interpreter = interpreter2;
		box.setStyle("-fx-background-color: #EEEEEE;");
		box.setPrefHeight(IDEBuilder.CONSOLE_HEIGHT);
		commandResources = ResourceBundle.getBundle(DEFAULT_RESOURCE_PACKAGE_COMMAND + language);
		uiResources = ResourceBundle.getBundle(DEFAULT_RESOURCE_PACKAGE_UI + language);
		builder = b;

		Button runButton = makeRunButton();
		buttonMap.put(runButton, "run");
		Button clearButton = makeClearButton();
		buttonMap.put(clearButton, "clearButton");
		Button openFileButton = makeFileButton();
		buttonMap.put(openFileButton, "openButton");
		Button saveFileButton = makeSaveButton();
		buttonMap.put(saveFileButton, "saveButton");
		Button fdButton = makeCommandButton(uiResources.getString("Forward"), "fd 20");
		buttonMap.put(fdButton, "Forward");
		Button bkButton = makeCommandButton(uiResources.getString("Backward"), "bk 20");
		buttonMap.put(bkButton, "Backward");
		Button ltButton = makeCommandButton(uiResources.getString("Left"), "lt 10");
		buttonMap.put(ltButton, "Left");
		Button rtButton = makeCommandButton(uiResources.getString("Right"), "rt 10");
		buttonMap.put(rtButton, "Right");
		Button showButton = makeCommandButton(uiResources.getString("ShowTurtle"), "st");
		buttonMap.put(showButton, "ShowTurtle");
		Button hideButton = makeCommandButton(uiResources.getString("HideTurtle"), "ht");
		buttonMap.put(hideButton, "HideTurtle");
		Button homeButton = makeCommandButton(uiResources.getString("Home"), "home");
		buttonMap.put(homeButton, "Home");
		Button csButton = makeCommandButton(uiResources.getString("ClearScreen"), "cs");
		buttonMap.put(csButton, "ClearScreen");
		Button puButton = makeCommandButton(uiResources.getString("PenUp"), "pu");
		buttonMap.put(puButton, "PenUp");
		Button pdButton = makeCommandButton(uiResources.getString("PenDown"), "pd");
		buttonMap.put(pdButton, "PenDown");
		//runButton, clearButton, openFileButton, saveFileButton, fdButton, bkButton, 
		//		ltButton, rtButton, showButton, hideButton, homeButton, csButton, puButton, pdButton);
		
		VBox runClearBox = new VBox(runButton, clearButton, openFileButton, saveFileButton);
		runClearBox.setAlignment(Pos.CENTER);
		runClearBox.setPrefWidth(clearButton.getWidth());
		HBox moveTurtleButtonsBox = new HBox(fdButton, bkButton, ltButton, rtButton, showButton, hideButton, homeButton, csButton, puButton, pdButton);
		moveTurtleButtonsBox.setAlignment(Pos.CENTER);
		moveTurtleButtonsBox.setPrefHeight(fdButton.getHeight());
		VBox consoleAndButtonsBox = new VBox(moveTurtleButtonsBox, prompt);

		prompt.setStyle("-fx-control-inner-background:#000000; -fx-text-fill: #FFFFFF;");
		prompt.setPrefWidth(IDEBuilder.IDE_WIDTH - clearButton.getWidth());

		box.getChildren().addAll(consoleAndButtonsBox, runClearBox);

	}

	/**
	 * @see ComponentBuilder:getNode()
	 */
	@Override
	public Node getNode() {
		// TODO Auto-generated method stub
		return box;
	}

	/**
	 * makeRunButton - makes button to run program
	 * @return Button
	 */
	private Button makeRunButton() {
		Button runButton = new Button(uiResources.getString("run"));
		runButton.setMinWidth(BUTTON_SIZE);

		runButton.setOnAction(action -> {
			commands = prompt.getText();
			run(commands);
			//commands = prompt.getText();
			//System.out.println(commands);
		});

		return runButton;
	}

	/**
	 * makeClearButton - makes button to clear console
	 * @return Button
	 */
	private Button makeClearButton() {
		Button clearButton = new Button(uiResources.getString("clearButton"));
		clearButton.setMinWidth(BUTTON_SIZE);

		clearButton.setOnAction(action -> {
			turtleDisplayer.clearError();
			prompt.clear();
		});

		return clearButton;
	}

	/**
	 * makeCommandButton - makes button that executes command
	 * @return Button
	 */
	private Button makeCommandButton(String name, String com) {
		Button comButton = new Button(name);
		comButton.setMinWidth(BUTTON_SIZE/2);

		comButton.setOnAction(action -> {
			run(com);
		});

		return comButton;
	}

	/**
	 * makeCommandButton - makes button that executes command
	 * @return Button
	 */
	private Button makeFileButton() {
		Button openButton = new Button(uiResources.getString("openButton"));
		openButton.setMinWidth(BUTTON_SIZE);
		openButton.setOnAction(
				new EventHandler<ActionEvent>() {
					@Override
					public void handle(final ActionEvent e) {
						FileChooser fileChooser = new FileChooser();
						File f = fileChooser.showOpenDialog(new Stage());
						if (f != null) {
							String mimetype = "Invalid";
							String path = f.getAbsolutePath();
							try {
								mimetype = Files.probeContentType(f.toPath());
								if (mimetype == null) mimetype = "Invalid";
							} catch (IOException e1) {
								// Do nothing
							}
							if (path.contains(".logo")) {
								try {
									runFromFile(f);
								} catch (FileNotFoundException e1) {
									alertUserInvalidLogo(f);
								}
							} else {
								alertUserInvalidLogo(f);
							}
						}
					}
				});
		return openButton;
	}

	/**
	 * Makes a button that can save the current console text to a file
	 * (currently requires user to add extension manually)
	 * @return saveButton
	 */
	private Button makeSaveButton() {
		Button saveButton = new Button(uiResources.getString("saveButton"));
		saveButton.setMinWidth(BUTTON_SIZE);
		saveButton.setOnAction(e -> {
			FileChooser fc = new FileChooser();
			File f = fc.showSaveDialog(new Stage());
			String text = prompt.getText();
			try {
				if(!f.getName().contains(".")){
					File f2 = new File(f.getParent(), f.getName() + ".logo");
					PrintWriter pw = new PrintWriter(f2);
					pw.println(text);
					pw.close();
				}
				else{
					alertUserInvalidFileName("Filename cannot contain '.'");
				}
			} catch (Exception e1) {
				alertUserInvalidFileName("Cannot save to the file chosen.");
			}
		});
		return saveButton;
	}

	/**
	 * throws a file not found alert
	 */
	private void alertUserInvalidLogo(File f){
		Alert alert = new Alert(AlertType.INFORMATION);
		alert.setTitle("Invalid SLOGO File");
		alert.setContentText("The filepath you chose, " + f.getAbsolutePath() + " is not a valid logo file!");
		alert.showAndWait();
	}

	/**
	 * throw a file name not valid alert
	 */
	private void alertUserInvalidFileName(String s){
		Alert alert = new Alert(Alert.AlertType.WARNING);
		alert.setHeaderText(s);
		alert.show();
	}

	/**
	 * scans SLOGO file and runs command
	 * @throws FileNotFoundException 
	 */
	public void runFromFile(File file) throws FileNotFoundException{
		Scanner sc = new Scanner(file);
		String fileCommand = "";
		while (sc.hasNextLine()) {
			if(sc.hasNext()){
				String next = sc.next();
				if(!next.equals("#")){
					fileCommand = fileCommand + next + sc.nextLine() + "\n";
				}
				else{
					sc.nextLine();
				}
			}
		}
		sc.close();
		run(fileCommand);
		//System.out.println(fileCommand);
	}

	/**
	 * updates the language that the interpreter will use to interpret commands
	 */
	public void updateConsoleLanguage(String lang){
		//System.out.println(language);
		language = lang;
		commandResources = ResourceBundle.getBundle(DEFAULT_RESOURCE_PACKAGE_COMMAND + language);
		uiResources = ResourceBundle.getBundle(DEFAULT_RESOURCE_PACKAGE_UI + language);
		updateButtons();
	}

	/**
	 * updates all button text
	 */
	private void updateButtons(){
		for(Button b : buttonMap.keySet()){
			String propKey = buttonMap.get(b);
			b.setText(uiResources.getString(propKey));
			if(!propKey.equals("saveButton") && !propKey.equals("clearButton") 
					&& !propKey.equals("openButton") && !propKey.equals("run")){
				loopCom = commandResources.getString(propKey).split("\\|")[0];
				if(propKey.equals("Forward") || propKey.equals("Backward")){
					loopCom = loopCom + " 20";
				}
				if(propKey.equals("Left") || propKey.equals("Right")){
					loopCom = loopCom + " 10";
				}
				String s = loopCom;
				b.setOnAction(e -> {
					run(s);
				});
			}
		}
	}

	/**
	 * Custom command entered from elsewhere in program
	 * @param com
	 */
	public void enterCommand(String com) {
		run(com);
	}

	/**
	 * run - Calls controller to interpret string and then calls TurtleDisplayer to update turtle display
	 */
	private void run(String com){
		//System.out.println(com);
		turtleDisplayer.clearError();
		prompt.clear();
		builder.update();
		interpreter.setLanguage(language);
		sLogoValid retMessage = interpreter.interpret(com);
		if(!retMessage.getError()){
			builder.addCommandHistory(com);
			Map<String, Object> variableMap = model.getCurrentVariables();
			builder.update();
			Set<Turtle> turtleSet = new HashSet<Turtle>();
			for(String s : variableMap.keySet()){
				if(variableMap.get(s) instanceof Turtle){
					turtleSet.add((Turtle)variableMap.get(s));
				}
			}
			if(!turtleSet.isEmpty()){
				turtleDisplayer.draw(turtleSet, retMessage);
			}  
		}
		else{
			turtleDisplayer.displayError(retMessage.getMyStringValue());
		}

		fixPosition();		
	}

	private void fixPosition() {
		interpreter.setLanguage("English");
		sLogoValid retMessage = interpreter.interpret("fd 0");
		Map<String, Object> variableMap2 = model.getCurrentVariables();
		builder.update();
		Set<Turtle> turtleSet2 = new HashSet<Turtle>();
		for(String s : variableMap2.keySet()){
			if(variableMap2.get(s) instanceof Turtle){
				turtleSet2.add((Turtle)variableMap2.get(s));
			}
		}
		if(!turtleSet2.isEmpty()){
			turtleDisplayer.draw(turtleSet2, retMessage);
		}  
	}
}
