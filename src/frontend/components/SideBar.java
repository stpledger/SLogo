package frontend.components;

import frontend.IDEBuilder;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;

public class SideBar implements ComponentBuilder {
	private VBox host = new VBox();
	
	public SideBar() {
		host.setStyle("-fx-background-color: #99FF99;");
		host.getChildren().add(new Label("Side Bar"));
		host.setPrefWidth(IDEBuilder.SIDEBAR_WIDTH);
	}
	
	public Node getNode() {
		return host;
	}
}
