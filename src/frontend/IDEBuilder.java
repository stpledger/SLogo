package frontend;

import frontend.components.SideBar;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;

public class IDEBuilder implements SceneBuilder{
	
	public static final double IDE_HEIGHT = 800;
	public static final double IDE_WIDTH = 600;
	
	private Scene scene;
	private BorderPane layout = new BorderPane();
	
	public IDEBuilder() {
		SideBar side = new SideBar();
		SideBar top = new SideBar();
		layout.setRight(side.getNode());
		layout.setTop(top.getNode());
	}
	
	@Override
	public Scene getScene() {
		return new Scene(layout, IDE_WIDTH, IDE_HEIGHT);
	}

}
