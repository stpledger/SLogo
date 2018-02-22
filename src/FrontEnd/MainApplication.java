package FrontEnd;

import javafx.application.Application;
import javafx.scene.Group;
import javafx.stage.Stage;

public class MainApplication extends Application {

	@Override
	public void start(Stage primaryStage) throws Exception {
        primaryStage.setScene(new IDEScene(new Group()));
        
        primaryStage.sizeToScene();
        primaryStage.show();
        
    }

    public static void main(String[] args) {
        launch(args);
    }
}
