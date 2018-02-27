package slogo_team14;

import java.util.ArrayList;

import backEnd.sLogoValid;
import backEnd.commands.*;
import java.util.Arrays;

/**
 * The purpose of this class is to be passed a command, sort it out into the correct type of command,
 * and instantiate a new command to be executed
 * @author stpledger
 */
public class Controller{
    private final ArrayList<String> TURTLE_MOVE_COMMANDS = new ArrayList<String>(Arrays.asList("fd", "bk", "lt", "rt", "seth", "towards", "goto", "pd", "pu", "st", "ht", "home", "cs"));
    private final ArrayList<String> TURTLE_QUERIES_COMMANDS = new ArrayList<String>(Arrays.asList("xcor", "ycor", "heading", "pendownp", "showingp"));
    private final ArrayList<String> MATH_COMMANDS = new ArrayList<String>(Arrays.asList("sum", "difference", "product", "quotient", "remainder", "minus", "random", "sin", "cos", "tan", "atan", "log", "pow", "pi"));
    private final ArrayList<String> BOOLEAN_COMMANDS = new ArrayList<String>(Arrays.asList("lessp", "greaterp", "equalp", "notequalp", "and", "or", "not"));
    private final ArrayList<String> VARIABLE_COMMANDS = new ArrayList<String>(Arrays.asList("make", "set"));
    private final ArrayList<String> CONTROL_STRUCTURE_COMMANDS = new ArrayList<String>(Arrays.asList("repeat", "dotimes", "for", "if", "ifelse"));
    private final ArrayList<String> USER_DEFINED_COMMANDS = new ArrayList<String>(Arrays.asList("to"));	
    		
    /**
     * Creates a new Controller object to be given commands and their arguments to then create
     * a new command object
     */
    public Controller(){
    }

    public sLogoValid create(String command, String args){
       String[] arguments = breakdown(args);
       CommandGroup newCommand;
       if(TURTLE_MOVE_COMMANDS.contains(command)){
    	   newCommand = new TurtleMoveCommand(command, arguments);
       }
       else if(TURTLE_QUERIES_COMMANDS.contains(command)){
    	   newCommand = new TurtleQueryCommand(command, arguments);
       }
       else if(MATH_COMMANDS.contains(command)){
    	   newCommand = new MathCommand(command, arguments);
       }
       else if(BOOLEAN_COMMANDS.contains(command)){
    	   newCommand = new BooleanCommand(command, arguments);
       }
       else if(VARIABLE_COMMANDS.contains(command)){
    	   newCommand = new VariableCommand(command, arguments);
       }
       else if(CONTROL_STRUCTURE_COMMANDS.contains(command)){
    	   newCommand = new ControlStructureCommand(command, arguments);
       }
       else if(USER_DEFINED_COMMANDS.contains(command)){
    	   newCommand = new UserDefinedCommand(command, arguments);
       }
       else{
    	   sLogoValid noCommand = new sLogoValid();
    	   noCommand.setMyStringValue("No command executed");
    	   return noCommand;
       }
       return newCommand.execute();
    }

    private String[] breakdown(String args){
        String[] result = args.split("\\s+");
        return result;
    }
    
    
}