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
	public static final double HEIGHT = 30;
	
	private String name;
	private String description;
	private HBox container = new HBox();
	private ScrollPane scroller = new ScrollPane();
	
	
	public SideBarComponent(String varName, String desc) {
		name = varName;
		description = desc;
		setStyle();
	}
	
	public SideBarComponent(String com) {
		name = com;
		description = "";
	}
	
	public Node getNode() {
		container.setPrefWidth(NAME_WIDTH + DESCRIPTION_WIDTH);
		container.getChildren().add(getNameComponent());
		container.getChildren().add(getDescriptionComponent());
		scroller.setContent(container);
		return scroller;
	}
	
	private Node getNameComponent() {
		Label l = new Label(name);
		l.setPrefWidth(NAME_WIDTH);
		return l;
	}
	
	private void setStyle() {
		scroller.setHbarPolicy(ScrollBarPolicy.NEVER);
		scroller.setVbarPolicy(ScrollBarPolicy.NEVER);
	}

	private Node getDescriptionComponent() {
		Label l = new Label(description);
		l.setPrefWidth(DESCRIPTION_WIDTH);
		return l;
	}
}