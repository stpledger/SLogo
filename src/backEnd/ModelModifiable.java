package backEnd;

import javafx.scene.paint.Paint;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
* API that allows controller to get and modify data from the model. 
* This interface will be implemented by the model
* 
*/
public interface ModelModifiable {
    /* 
    * Adds a variable from the model's String -> Object HashMap
    */
    public double addVariable(String newVar, Object obj);
    
    /*
    * Deletes a variable from the model's String -> Object HashMap
    */
    public double deleteVariable(String toDelete);
    
    public sLogoValid getVariable(String name);
    	 
	public Map<Integer, Turtle> getTurtlesToModify();

    public Set<Turtle> getTurtles();
    
    public void addCommandHistory(CommandGroup command);

    public void setPenColor(Paint color);

    public void addColor(int index, ArrayList<Double> rgb);

    public List<Double> getColorByIndex(int i);

    public void setPenSize(double size);

    public String getShapeByIndex(int i);

    public int getMyCurrentColorIndex();

    public int getMyCurrentShapeIndex();

    public double setActiveTurtles(int[] turtleIDs);

    public double numOfTurtles();

    public double getActiveTurtleID();





}