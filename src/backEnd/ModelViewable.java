package backEnd;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
* API that allows the view access to data from the model
* 
*/
public interface ModelViewable {
    /*
    * Returns a set of all ImageView objects to display on the View
    */
    public Set<Turtle> getTurtles();
    
    /*
    * Gets a list of previously executed commands
    */
    public List<CommandGroup> getPreviousCommands();
    
    /*
    * Gets a map of current variables and their values
    */
    public Map<String, Object> getCurrentVariables();
    
    public Map<Integer, List<Double>> getPalette();
    
    public int getMyCurrentColorIndex();
    public void setMyCurrentColorIndex(int i);
}