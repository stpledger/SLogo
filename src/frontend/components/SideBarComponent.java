package frontend.components;



import javafx.geometry.Insets;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.control.ScrollPane.ScrollBarPolicy;
import javafx.scene.input.KeyCode;
import javafx.scene.control.TextField;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.HBox;
import javafx.scene.paint.Color;

public class SideBarComponent {
	
	public static final double NAME_WIDTH = 100;
	public static final double DESCRIPTION_WIDTH = 200;
	public static final double HEIGHT = 30;
	public static final double PADDING = 5;
	
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
		setStyle();
	}
	
	public Node getNode() {
		container.setPrefWidth(NAME_WIDTH + DESCRIPTION_WIDTH);
		container.getChildren().add(getNameComponent());
		container.getChildren().add(getDescriptionComponent());
		scroller.setContent(container);
		scroller.setOnMouseEntered(e -> container.setBackground(new Background(new BackgroundFill(Color.CORNFLOWERBLUE, CornerRadii.EMPTY, Insets.EMPTY))));
		scroller.setOnMouseExited(e -> container.setBackground(new Background(new BackgroundFill(Color.gray(.95), CornerRadii.EMPTY, Insets.EMPTY))));
		return scroller;
	}
	
	private Node getNameComponent() {
		Label l = new Label(name);
		l.setPadding(new Insets(PADDING));
		l.setPrefWidth(NAME_WIDTH);
		return l;
	}
//	public double getEditValue() {
//		editVal = Double.parseDouble(description);
//		container.getChildren().remove(1);
//		TextField box = new TextField();
//		container.getChildren().add(box);
//		box.setOnKeyReleased(e -> {
//			if (e.getCode() == KeyCode.ENTER) {
//				editVal = Double.parseDouble(box.getText());
//				description = editVal.toString();
//				container.getChildren().remove(box);
//				container.getChildren().add(getDescriptionComponent());
//			}
//		});
//		container.getChildren().add(box);
//		return editVal;
//	}
	
	
	private void setStyle() {
		scroller.setHbarPolicy(ScrollBarPolicy.NEVER);
		scroller.setVbarPolicy(ScrollBarPolicy.NEVER);
		container.setSpacing(5);
	}

	private Node getDescriptionComponent() {
		Label l = new Label(description);
		l.setPrefWidth(DESCRIPTION_WIDTH);
		l.setPadding(new Insets(PADDING));
		return l;
	}
}