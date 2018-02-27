package model;

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
    public Set<Command> getPreviousCommands();
    
    /*
    * Gets a map of current variables and their values
    */
    public Map<String, Object> getCurrentVariables();
}