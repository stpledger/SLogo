package frontend.components;

import backEnd.CommandGroup;
import backEnd.ModelViewable;
import frontend.IDEBuilder;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.control.ScrollPane.ScrollBarPolicy;
import javafx.scene.layout.Border;
import javafx.scene.layout.BorderStroke;
import javafx.scene.layout.BorderStrokeStyle;
import javafx.scene.layout.BorderWidths;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;

public class SideBar implements ComponentBuilder {
	private VBox host = new VBox();
	private ModelViewable displayableModel;
	private IDEBuilder builder;
	
	public SideBar(ModelViewable incoming, IDEBuilder b) {
		builder = b;
		displayableModel = incoming;
		host.setStyle("-fx-background-color: #FFFFFF;");
		host.getChildren().add(new Label("Side Bar"));
		host.setPrefWidth(IDEBuilder.SIDEBAR_WIDTH);
		update();
	}
	
	public void addElement(String name, String desc) {
		SideBarComponent comp = new SideBarComponent(name, desc);
		host.getChildren().add(comp.getNode());
	}
	
	public void update() {
		host.getChildren().clear();
		addHeader();
		for (String key: displayableModel.getCurrentVariables().keySet()) {
			addElement(key, displayableModel.getCurrentVariables().get(key).toString());
		}
		host.getChildren().add(formatHeaderCell(new Label("Previous Commands")));
		
		System.out.println(displayableModel.getPreviousCommands());
		for (CommandGroup com: displayableModel.getPreviousCommands()) {
			Node prevCommandNode = new SideBarComponent(com.toString()).getNode();
			prevCommandNode.setStyle(".myElement:hover {filter: brightness(10%);}");
			prevCommandNode.setOnMouseClicked(e -> builder.enterConsoleCommand(com.toString()));
			host.getChildren().add(prevCommandNode);
			
		}
	}

	public Node getNode() {
		ScrollPane scroller = new ScrollPane();
		scroller.setHbarPolicy(ScrollBarPolicy.NEVER);
		scroller.setVbarPolicy(ScrollBarPolicy.NEVER);
		scroller.setContent(host);
		return scroller;
	}
	
	private void addHeader() {
		HBox header = new HBox();
		header.getChildren().add(formatHeaderCell (new Label("Var Name")));
		header.getChildren().add(formatHeaderCell (new Label("Description")));
		host.getChildren().add(header);

	}
	
	private Label formatHeaderCell (Label l) {
		l.setMinHeight(40);
		l.setMinWidth(100);
		l.setFont(Font.font("Verdana", FontWeight.BOLD, 12));
		return l;
	}
	
	public ModelViewable getModel() {
		return displayableModel;
	}
}
