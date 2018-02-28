package frontend.components;

import backEnd.ModelViewable;
import frontend.IDEBuilder;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.Border;
import javafx.scene.layout.BorderStroke;
import javafx.scene.layout.BorderStrokeStyle;
import javafx.scene.layout.BorderWidths;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;

public class SideBar implements ComponentBuilder {
	private VBox host = new VBox();
	private ModelViewable displayableModel;
	
	public SideBar(ModelViewable incoming) {
		displayableModel = incoming;
		host.setStyle("-fx-background-color: #99FF99;");
		host.getChildren().add(new Label("Side Bar"));
		host.setPrefWidth(IDEBuilder.SIDEBAR_WIDTH);
		host.setMaxWidth(200);
		host.setBorder(new Border(new BorderStroke(Color.BLACK, 
	            BorderStrokeStyle.SOLID, CornerRadii.EMPTY, BorderWidths.DEFAULT)));
		update();
	}
	
	public void addElement(String name, String desc) {
		SideBarComponent comp = new SideBarComponent(name, desc);
		host.getChildren().add(comp.getNode());
	}
	
	public void update() {
		host.getChildren().clear();
		for (String key: displayableModel.getCurrentVariables().keySet()) {
			addElement(key, displayableModel.getCurrentVariables().get(key).toString());
		}
	}
	
	public Node getNode() {
		return host;
	}
	
	public ModelViewable getModel() {
		return displayableModel;
	}
}
