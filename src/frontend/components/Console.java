package frontend.components;

import java.util.Map;
import java.util.Set;

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

public class Console implements ComponentBuilder{
	private static final double BUTTON_SIZE = 50;
	
	private VBox box = new VBox();
	private String commands;
	private TextArea prompt = new TextArea();
	
	public Console () {
		box.setStyle("-fx-background-color: #7777FF;");
		Label label = new Label("Console");
		label.setPrefSize(100, 5);
		
		Button runButton = makeGetTextButton();
		Button clearButton = makeClearButton();
		HBox hbox = new HBox(clearButton, runButton);
		
		prompt.setStyle("-fx-control-inner-background:#000000; -fx-text-fill: #FFFFFF;");
			    
		box.getChildren().addAll(label, prompt, hbox);
		
	}
	@Override
	public Node getNode() {
		// TODO Auto-generated method stub
		return box;
	}
		
	private Button makeGetTextButton() {
		Button runButton = new Button("Run");
		runButton.setMinWidth(BUTTON_SIZE);

		runButton.setOnAction(action -> {
			//run();
			commands = prompt.getText();
			System.out.println(commands);
        });

        return runButton;
	}
	
	private Button makeClearButton() {
		Button runButton = new Button("Clear");
		runButton.setMinWidth(BUTTON_SIZE);

		runButton.setOnAction(action -> {
			prompt.clear();
        });

        return runButton;
	}
	
	public void run(){
		commands = prompt.getText();
	    SLogoValid retMessage = controller.interpret(commands);
	    boolean isValid = retMessage.isValid();
	    if(isValid){
	        Map<String, Object> variableMap = ModelViewable.getCurrentVariables();
	        Set<Turtle> turtleSet = new Set<Turtle>
	        for(String s : variableMap.keys()){
	            if(variableMap.get(s) == instanceof(Turtle)){
	                turtleSet.add(variableMap.get(s));
	            }
	        }
	        if(!turtleSet.isEmpty()){
	            TurtleDisplayer.draw(turtleSet);
	        }  
	    }
	    else{
	        ErrorPrinter(retMessage.toString);
	    }
	}
}
