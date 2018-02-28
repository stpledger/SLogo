package frontend.components;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import frontend.IDEBuilder;
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
	
	private HBox box = new HBox();
	private String commands;
	private TextArea prompt = new TextArea();
	private TurtleDisplayer turtleDisplayer;
	private Model model;
	private Interpreter interpreter;
	private String language = "English";
	
	public Console (TurtleDisplayer t, Model m, Interpreter i) {
		turtleDisplayer = t;
		model = m;
		interpreter = i;
		box.setStyle("-fx-background-color: #7777FF;");
		box.setPrefHeight(IDEBuilder.CONSOLE_HEIGHT);
		
		Button runButton = makeRunButton();
		Button clearButton = makeClearButton();
		VBox vbox = new VBox(runButton, clearButton);
		vbox.setAlignment(Pos.CENTER);
		vbox.setPrefWidth(clearButton.getWidth());
		
		prompt.setStyle("-fx-control-inner-background:#000000; -fx-text-fill: #FFFFFF;");
		prompt.setPrefWidth(IDEBuilder.IDE_WIDTH - clearButton.getWidth());
			    
		box.getChildren().addAll(prompt, vbox);
		
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
			run();
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
	 * updates the language that the interpreter will use to interpret commands
	 */
	public void updateConsoleLanguage(String lang){
		language = lang;
	}
	
	/**
	 * run - Calls controller to interpret string and then calls TurtleDisplayer to update turtle display
	 */
	public void run(){
		turtleDisplayer.clearError();
		commands = prompt.getText();
		// TODO: Get language from toolbar
		interpreter.setLanguage(language);
	    sLogoValid retMessage = interpreter.interpret(commands);
	    boolean isError = retMessage.getError();
	    if(!isError){
//	        Map<String, Object> variableMap = model.getCurrentVariables();
//	        Set<Turtle> turtleSet = new HashSet<Turtle>();
//	        for(String s : variableMap.keySet()){
//	            if(variableMap.get(s) instanceof Turtle){
//	                turtleSet.add((Turtle)variableMap.get(s));
//	            }
//	        }
//	        if(!turtleSet.isEmpty()){
//	            turtleDisplayer.draw(turtleSet, retMessage);
//	        }  
	    }
	    else{
	        turtleDisplayer.displayError(retMessage.getMyStringValue());
	    }
	}
}
