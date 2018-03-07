package frontend.components;

import java.io.File;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import frontend.IDEBuilder;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Node;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
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
 * @author Marcus Oertle
 *
 */
public class Console implements ComponentBuilder{
	private static final double BUTTON_SIZE = 75;
	
	private VBox box = new VBox();
	private String commands;
	private TextArea prompt = new TextArea();
	private TurtleDisplayer turtleDisplayer;
	private Model model;
	private Interpreter interpreter;
	private String language = "English";
	
	public Console (TurtleDisplayer t, Model m, Interpreter interpreter2) {
		turtleDisplayer = t;
		model = m;
		interpreter = interpreter2;
		box.setStyle("-fx-background-color: #7777FF;");
		box.setPrefHeight(IDEBuilder.CONSOLE_HEIGHT);
		
		Button runButton = makeRunButton();
		Button clearButton = makeClearButton();
		//Button openFileButton = makeFileButton();
		Button fdButton = makeCommandButton("fd", "fd 20");
		Button bkButton = makeCommandButton("bk", "bk 20");
		Button ltButton = makeCommandButton("lt", "lt 10");
		Button rtButton = makeCommandButton("rt", "rt 10");
		Button showButton = makeCommandButton("show", "st");
		Button hideButton = makeCommandButton("hide", "ht");
		Button homeButton = makeCommandButton("home", "home");
		Button csButton = makeCommandButton("clear", "cs");
		VBox runClearBox = new VBox(runButton, clearButton);
		runClearBox.setAlignment(Pos.CENTER);
		runClearBox.setPrefWidth(clearButton.getWidth());
		HBox moveTurtleButtonsBox = new HBox(fdButton, bkButton, ltButton, rtButton, showButton, hideButton, homeButton, csButton);
		moveTurtleButtonsBox.setAlignment(Pos.CENTER);
		moveTurtleButtonsBox.setPrefHeight(fdButton.getHeight());
		HBox consoleRunClearBox = new HBox(prompt, runClearBox);
		
		prompt.setStyle("-fx-control-inner-background:#000000; -fx-text-fill: #FFFFFF;");
		prompt.setPrefWidth(IDEBuilder.IDE_WIDTH - clearButton.getWidth());
			    
		box.getChildren().addAll(moveTurtleButtonsBox, consoleRunClearBox);
		
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
		Button runButton = new Button("Run");
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
		Button clearButton = new Button("Clear");
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
//	private Button makeFileButton()) {
//		Button openButton = new Button("Open..");
//		FileChooser fileChooser = new FileChooser();
//		openButton.setOnAction(
//				new EventHandler<ActionEvent>() {
//					@Override
//					public void handle(final ActionEvent e) {
//						File file = fileChooser.showOpenDialog(new Stage());
//						if (file != null) {
//							String fileName;
//							fileName = file.getName();	
//							try {
//								
//							} catch (Exception e1) {
//							}
//						}
//					}
//				});
//		return openButton;
//	}
	
	/**
	 * updates the language that the interpreter will use to interpret commands
	 */
	public void updateConsoleLanguage(String lang){
		language = lang;
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
	public void run(String com){
		turtleDisplayer.clearError();
		prompt.clear();
		interpreter.setLanguage(language);
	    sLogoValid retMessage = interpreter.interpret(com);
	    if(!retMessage.getError()){
	        Map<String, Object> variableMap = model.getCurrentVariables();
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
	}
}
