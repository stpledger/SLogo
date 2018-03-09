package frontend;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

public class MainApplication extends Application {

	@Override
	public void start(Stage primaryStage) throws Exception {	
		SceneBuilder IDE = new IDEBuilder();
		primaryStage.getIcons().add(new Image("robert.png"));
		primaryStage.setTitle("SLOGO IDE 9001");
        primaryStage.setScene(IDE.getScene());
        primaryStage.sizeToScene();
        primaryStage.setResizable(false);
        primaryStage.show();
        
    } 

    public static void main(String[] args) {
        launch(args);
    }
}
 