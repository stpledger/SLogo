package frontend.components;



import frontend.IDEBuilder;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.control.ScrollPane.ScrollBarPolicy;
import javafx.scene.layout.HBox;

public class SideBarComponent {
	
	public static final double NAME_WIDTH = 100;
	public static final double DESCRIPTION_WIDTH = 200;
	public static final double HEIGHT = 20;
	
	private String name;
	private String description;
	private HBox container = new HBox();
	private ScrollPane scroller = new ScrollPane();
	
	
	public SideBarComponent(String varName, String desc) {
		name = varName;
		description = desc;
		setStyle();
	}
	
	public Node getNode() {
		container.setPrefSize(NAME_WIDTH + DESCRIPTION_WIDTH, HEIGHT);
		container.getChildren().add(getNameComponent());
		container.getChildren().add(getDescriptionComponent());
		scroller.setContent(container);
		return scroller;
	}
	
	private Node getNameComponent() {
		Label l = new Label(name);
		l.setPrefSize(NAME_WIDTH, HEIGHT);
		return l;
	}
	
	private void setStyle() {
		scroller.setHbarPolicy(ScrollBarPolicy.NEVER);
		scroller.setVbarPolicy(ScrollBarPolicy.NEVER);
	}

	private Node getDescriptionComponent() {
		Label l = new Label(description);
		l.setPrefSize(DESCRIPTION_WIDTH, HEIGHT);
		return l;
	}
}