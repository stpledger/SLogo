package frontend;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class MainApplication extends Application {

	@Override
	public void start(Stage primaryStage) throws Exception {	
		SceneBuilder IDE = new IDEBuilder();
        primaryStage.setScene(IDE.getScene());
        primaryStage.sizeToScene();
        primaryStage.setResizable(false);
        primaryStage.show();
        
    }

    public static void main(String[] args) {
        launch(args);
    }
}
 