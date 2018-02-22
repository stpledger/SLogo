package frontend;

import frontend.components.ComponentBuilder;
import frontend.components.Console;
import frontend.components.SideBar;
import frontend.components.ToolBar;
import frontend.components.TurtleDisplayer;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;

public class IDEBuilder implements SceneBuilder{
	
	public static final double IDE_HEIGHT = 800;
	public static final double IDE_WIDTH = 600;
	
	
	private BorderPane layout = new BorderPane();
	
	public IDEBuilder() {
		ComponentBuilder side = new SideBar();
		ComponentBuilder toolbar = new ToolBar();
		ComponentBuilder turtleDisplay = new TurtleDisplayer();
		ComponentBuilder console = new Console();
		
		layout.setRight(side.getNode());
		layout.setTop(toolbar.getNode());
		layout.setCenter(turtleDisplay.getNode());
		layout.setBottom(console.getNode());
	}
	
	@Override
	public Scene getScene() {
		return new Scene(layout, IDE_WIDTH, IDE_HEIGHT);
	}

}
