package frontend;

import java.util.List;
import java.util.Map;

import backEnd.Interpreter;
import backEnd.Model;
import backEnd.Turtle;
import frontend.components.Console;
import frontend.components.SideBar;
import frontend.components.ToolBar;
import frontend.components.TurtleDisplayer;
import javafx.scene.Scene;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.BorderPane;
import javafx.scene.paint.Color;

public class IDEBuilder implements SceneBuilder, View{
	
	public static final double IDE_HEIGHT = 600;
	public static final double IDE_WIDTH = 1200;
	public static final double TOOLBAR_HEIGHT = 25;
	public static final double CONSOLE_HEIGHT = 175;
	public static final double SIDEBAR_WIDTH = 260;
	public static final double DISPLAY_HEIGHT = IDE_HEIGHT - TOOLBAR_HEIGHT - CONSOLE_HEIGHT;
	public static final double DISPLAY_WIDTH = IDE_WIDTH - SIDEBAR_WIDTH;
	public static Map<Double, Color> COLORMAP;
	private ToolBar toolbar;
	private SideBar side;
	private TurtleDisplayer turtleDisplay;
	private Console console;
	private BorderPane layout = new BorderPane();
	
	public IDEBuilder() {
		toolbar = new ToolBar(this);
		Model m = new Model();
		Interpreter interpreter = new Interpreter(m);
		side = new SideBar(m, this);
		turtleDisplay = new TurtleDisplayer();
		console = new Console(turtleDisplay, m, interpreter, this);
		layout.setRight(side.getNode());
		layout.setTop(toolbar.getNode());
		layout.setCenter(turtleDisplay.getNode());
		layout.setBottom(console.getNode());
		update();
		enterConsoleCommand("SETBG 4");
		setBackgroundColor(4);
		
	}
	
	@Override
	public Scene getScene() {
		Scene s = new Scene(layout, IDE_WIDTH, IDE_HEIGHT);
		s.setOnKeyPressed(e -> {
			if (e.getCode() == KeyCode.W) {
				enterConsoleCommand("fd 20");
			}
			else if (e.getCode() == KeyCode.A) {
				enterConsoleCommand("lt 10");
			}
			else if (e.getCode() == KeyCode.S) {
				enterConsoleCommand("bk 20");
			}
			else if (e.getCode() == KeyCode.D) {
				enterConsoleCommand("rt 10");
			}
		});
		return s;
	}
	
	public Map<Integer, List<Double>> getPallete() {
		return side.getModel().getPalette();
	}
	
	public void setBackgroundColor(int i) {
		if (getPallete().containsKey(i)) {
			turtleDisplay.setBackgroundColor(interpretColor(getPallete().get(i)));
		}
	}
	
	private String interpretColor (List<Double> rgb) {
		return new Color(rgb.get(0) / 256, rgb.get(1) / 256, rgb.get(2) / 256, 1).toString();
	}
	
	public void setTurtleImage(String turtlename, String filepath) {
		for (String s: side.getModel().getCurrentVariables().keySet()) {
			Object temp = (side.getModel().getCurrentVariables().get(s));
			if (temp instanceof Turtle) {
				Turtle t = (Turtle)t;
				t.setFilePath(filepath);
				break;
			}
		}
	}
	public void update() {
		console.updateConsoleLanguage(toolbar.getLanguage());
		setBackgroundColor(side.getModel().getMyCurrentColorIndex());
		side.update();
		toolbar.update(side.getModel());
//		if (toolbar.getCurrentImageSelected().length() > 0) {turtleDisplay.changeImage(toolbar.getCurrentImageSelected());}
	}
	
	public void updateColorIndex(int i) {
		side.getModel().setMyCurrentColorIndex(i);
	}
	public void enterConsoleCommand(String s) {
		console.enterCommand(s);
	}

	public void addCommandHistory(String com) {
		side.addToCommandHistory(com);
	}
	
	public void displayError(String s){
		turtleDisplay.displayError(s);
	}
	
//	public void updateDisplayerImage(String s){
//		turtleDisplay.changeImage(s);
//	}
}
