package frontend;

import backEnd.Interpreter;
import backEnd.Model;
import frontend.components.ComponentBuilder;
import frontend.components.Console;
import frontend.components.SideBar;
import frontend.components.ToolBar;
import frontend.components.TurtleDisplayer;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;

public class IDEBuilder implements SceneBuilder{
	
	public static final double IDE_HEIGHT = 600;
	public static final double IDE_WIDTH = 1200;
	public static final double TOOLBAR_HEIGHT = 15;
	public static final double CONSOLE_HEIGHT = 150;
	public static final double SIDEBAR_WIDTH = 200;
	public static final double DISPLAY_HEIGHT = IDE_HEIGHT - TOOLBAR_HEIGHT - CONSOLE_HEIGHT;
	public static final double DISPLAY_WIDTH = IDE_WIDTH - SIDEBAR_WIDTH;
	
	private ToolBar toolbar;
	private SideBar side;
	private TurtleDisplayer turtleDisplay;
	private Console console;
	
	private BorderPane layout = new BorderPane();
	
	public IDEBuilder() {
		
		toolbar = new ToolBar(this);
		Model m = new Model();
		Interpreter interpreter = new Interpreter(toolbar.getLanguage());
		side = new SideBar(m);
		turtleDisplay = new TurtleDisplayer();
		console = new Console(turtleDisplay, m, interpreter);
		
		layout.setRight(side.getNode());
		layout.setTop(toolbar.getNode());
		layout.setCenter(turtleDisplay.getNode());
		layout.setBottom(console.getNode());
	}
	
	@Override
	public Scene getScene() {
		return new Scene(layout, IDE_WIDTH, IDE_HEIGHT);
	}
	
	public void update() {
		console.updateConsoleLanguage(toolbar.getLanguage());
	}

}
