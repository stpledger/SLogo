package model;

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

}