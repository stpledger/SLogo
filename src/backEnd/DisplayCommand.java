package backEnd;

import javafx.scene.paint.Color;
import java.util.ArrayList;
import java.util.Arrays;

public class DisplayCommand extends CommandGroup{
    private ModelModifiable myModel;
    private Turtle Turtle;

    public DisplayCommand(String command, String[] args, ModelModifiable model, Turtle turtle) {
        super(command, args);
        myModel = model;
        Turtle = turtle;
        this.mySlogoValid = run(command, args);
    }

    @Override
    public sLogoValid execute() {
        return this.mySlogoValid;
    }

    public sLogoValid run(String command, String[] args){
        switch (command){
            case "setbg":
                return setbg(args);
            case "setpc":
                return setpc(args);
            case "setps":
                return setps(args);
            case "setsh":
                return setsh(args);
            case "setpalatte":
                return setpalatte(args);
            case "pc":
                return pc();
            case "sh":
                return sh();
            default:
                sLogoValid noExecute = new sLogoValid();
                noExecute.setError(true);
                noExecute.setMyStringValue("No command run");
                return noExecute;
        }
    }

    private sLogoValid setbg(String[] args){
        sLogoValid temp = new sLogoValid();
        return temp;
    }

    private sLogoValid setpc(String[] args){
        sLogoValid temp = new sLogoValid();
        ArrayList<Double> rgb = (ArrayList<Double>) myModel.getColorByIndex((int) Double.parseDouble(args[0]));
        Color color = new Color(rgb.get(0), rgb.get(1), rgb.get(2), 0);
        myModel.setPenColor(color);
        temp.setMyDoubleValue(Double.parseDouble(args[0]));
        return temp;
    }

    private sLogoValid setps(String[] args){
        sLogoValid temp = new sLogoValid();
        myModel.setPenSize(Double.parseDouble(args[0]));
        temp.setMyDoubleValue(Double.parseDouble(args[0]));
        return temp;
    }

    private sLogoValid setsh(String[] args){
        sLogoValid temp = new sLogoValid();
        myModel.getShapeByIndex((int)Double.parseDouble(args[0]));
        temp.setMyDoubleValue(Double.parseDouble(args[0]));
        return temp;
    }

    private sLogoValid setpalatte(String[] args){
        sLogoValid temp = new sLogoValid();
        myModel.addColor((int)Double.parseDouble(args[0]), new ArrayList<>(Arrays.asList(Double.parseDouble(args[1]), Double.parseDouble(args[2]), Double.parseDouble(args[3]))));
        temp.setMyDoubleValue(Double.parseDouble(args[0]));
        return temp;
    }

    private sLogoValid pc(){
        sLogoValid temp = new sLogoValid();
        temp.setMyDoubleValue(myModel.getMyCurrentColorIndex());
        return temp;
    }

    private sLogoValid sh(){
        sLogoValid temp = new sLogoValid();
        temp.setMyDoubleValue(myModel.getMyCurrentShapeIndex());
        return temp;
    }
}
