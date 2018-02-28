package frontend.components;

import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;

public class SideBarComponent {
	
	public static final double NAME_WIDTH = 100;
	public static final double DESCRIPTION_WIDTH = 150;
	public static final double HEIGHT = 50;
	
	private String name;
	private String description;
	private HBox container = new HBox();
	
	
	
	public SideBarComponent(String varName, String desc) {
		name = varName;
		description = desc;
	}
	
	public Node getNode() {
		container.setPrefSize(NAME_WIDTH + DESCRIPTION_WIDTH, HEIGHT);
		container.getChildren().add(getNameComponent());
		container.getChildren().add(getDescriptionComponent());
		return container;
	}
	
	private Node getNameComponent() {
		Label l = new Label(name);
		l.setPrefSize(NAME_WIDTH, HEIGHT);
		return l;
	}
	
	private Node getDescriptionComponent() {
		Label l = new Label(description);
		l.setPrefSize(NAME_WIDTH, HEIGHT);
		return l;
	}
}