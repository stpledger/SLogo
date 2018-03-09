package frontend.components;

import java.util.LinkedList;
import java.util.List;
import java.util.ResourceBundle;

import backEnd.ModelViewable;
import backEnd.Turtle;
import frontend.IDEBuilder;
import javafx.scene.Node;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.control.ScrollPane.ScrollBarPolicy;
import javafx.scene.control.TextField;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.stage.Stage;

public class SideBar implements ComponentBuilder {
	private VBox host = new VBox();
	private ModelViewable displayableModel;
	private IDEBuilder builder;
	private List<String> previousCommands;
	private HBox header1;
	private Label prevComsLabel;
	private static final String DEFAULT_RESOURCE_PACKAGE_UI = "resources/ui/";
	private ResourceBundle uiResources;

	public SideBar(ModelViewable incoming, IDEBuilder b) {
		builder = b;
		displayableModel = incoming;
		host.setStyle("-fx-background-color: #FFFFFF;");
		host.getChildren().add(new Label("Side Bar"));
		host.setPrefWidth(IDEBuilder.SIDEBAR_WIDTH);
		previousCommands = new LinkedList<>();
		update();
		uiResources = ResourceBundle.getBundle(DEFAULT_RESOURCE_PACKAGE_UI + builder.getLanguage());
	}

	public void addElement(String name, String desc) {
		Node comp = new SideBarComponent(name, desc).getNode();
		if (!(displayableModel.getCurrentVariables().get(name) instanceof Turtle)) {
			comp.setOnMouseClicked (e -> {
				HBox g = new HBox();
				Stage tempStage = new Stage();
				Scene primScene = new Scene(g);
				g.getChildren().add(new Label("Change " + name + " to: " ));
				TextField t = new TextField();
				t.setOnKeyPressed(e1 -> {
					if (e1.getCode() == KeyCode.ENTER) {
						try{
							Double d = Double.valueOf(t.getText());
							if (d != null) {
								builder.enterConsoleCommand("make " + name + " " + d);
								tempStage.close();
							}
						} catch (Exception e2){
							builder.displayError("Invalid numeric value!");
						}
					}
				});
				g.getChildren().add(t);
				tempStage.setScene(primScene);
				tempStage.show();
			});
		}
		
		host.getChildren().add(comp);
	} 

	public void update() {
		host.getChildren().clear();
		addHeader();

		for (String key: displayableModel.getCurrentVariables().keySet()) {
			addElement(key, displayableModel.getCurrentVariables().get(key).toString());
		}

		prevComsLabel = new Label("Previous Commands");
		host.getChildren().add(formatHeaderCell(prevComsLabel));

		//System.out.println(displayableModel.getPreviousCommands());
		int count = 0;
		for (String com: previousCommands) {
			Node prevCommandNode = new SideBarComponent(com.toString()).getNode();
			prevCommandNode.setOnMouseClicked(e -> builder.enterConsoleCommand(com.toString()));
			host.getChildren().add(prevCommandNode);
			count += 1;
			if (count > 50) {break;}

		}
	} 

	public void addToCommandHistory(String com) {
		previousCommands.add(0, com);
	}
	public Node getNode() {
		ScrollPane scroller = new ScrollPane();
		scroller.setHbarPolicy(ScrollBarPolicy.NEVER);
		scroller.setVbarPolicy(ScrollBarPolicy.NEVER);
		scroller.setContent(host);
		return scroller;
	}

	private void addHeader() {
		header1 = new HBox();
		header1.getChildren().add(formatHeaderCell (new Label("Var Name")));
		header1.getChildren().add(formatHeaderCell (new Label("Description")));
		host.getChildren().add(header1);

	}
	
	public void updateLanguageUI() {
		uiResources = ResourceBundle.getBundle(DEFAULT_RESOURCE_PACKAGE_UI + builder.getLanguage());
		Label lab0 = (Label) header1.getChildren().get(0);
		Label lab1 = (Label) header1.getChildren().get(1);
		lab0.setText(uiResources.getString("varname"));
		lab1.setText(uiResources.getString("description"));
		prevComsLabel.setText(uiResources.getString("prevcoms"));
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
