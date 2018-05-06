package backEnd;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * The purpose of this class is to be passed a command, sort it out into the correct type of command,
 * and instantiate a new command to be executed
 * @author stpledger
 */
public class Controller{
    private final ArrayList<String> TURTLE_MOVE_COMMANDS = new ArrayList<>(Arrays.asList("fd", "bk", "lt", "rt", "seth", "towards", "goto", "pd", "pu", "st", "ht", "home", "cs"));
    private final ArrayList<String> TURTLE_QUERIES_COMMANDS = new ArrayList<>(Arrays.asList("xcor", "ycor", "heading", "pendownp", "showingp"));
    private final ArrayList<String> MATH_COMMANDS = new ArrayList<>(Arrays.asList("sum", "difference", "product", "quotient", "remainder", "minus", "random", "sin", "cos", "tan", "atan", "log", "pow", "pi"));
    private final ArrayList<String> BOOLEAN_COMMANDS = new ArrayList<>(Arrays.asList("lessp", "greaterp", "equalp", "notequalp", "and", "or", "not"));
    private final ArrayList<String> VARIABLE_COMMANDS = new ArrayList<>(Arrays.asList("make", "set"));
    private final ArrayList<String> USER_DEFINED_COMMANDS = new ArrayList<>(Arrays.asList("to"));
    private final ArrayList<String> DISPLAY_COMMANDS = new ArrayList<>(Arrays.asList("setbg", "setpc", "setps", "setsh", "setpalatte", "pc", "sh", "stamp", "clearstamps"));
    private final ArrayList<String> MULTIPLE_TURTLE_COMMANDS = new ArrayList<>(Arrays.asList("id", "turtles", "tell", "ask", "askwith"));

    private ModelModifiable myModel;
    		
    /**
     * Creates a new Controller object to be given commands and their arguments to then create
     * a new command object
     */
    public Controller(ModelModifiable model){
        myModel = model;
    }

    public sLogoValid create(String command, String[] args){
        return create (command, args, (int)myModel.getActiveTurtleID());
    }


    public sLogoValid create(String command, String[] args, int turtleID){
        CommandGroup newCommand;
        Turtle turtle = myModel.getTurtlesToModify().get(turtleID);
        if(TURTLE_MOVE_COMMANDS.contains(command)){
            newCommand = new TurtleMoveCommand(command, args, turtle);
        }
        else if(TURTLE_QUERIES_COMMANDS.contains(command)){
            newCommand = new TurtleQueryCommand(command, args, turtle);
        }
        else if(MATH_COMMANDS.contains(command)){
            newCommand = new MathCommand(command, args);
        }
        else if(BOOLEAN_COMMANDS.contains(command)){
            newCommand = new BooleanCommand(command, args);
        }
        else if(VARIABLE_COMMANDS.contains(command) || USER_DEFINED_COMMANDS.contains(command)) {
            newCommand = new VariableCommand(command, args, myModel);
        }
        else if(DISPLAY_COMMANDS.contains(command)){
            newCommand = new DisplayCommand(command, args, myModel, turtle);
        }
        else if(MULTIPLE_TURTLE_COMMANDS.contains(command)){
            newCommand = new MultipleTurtleCommand(command, args, myModel);
        }
        else{
            sLogoValid noCommand = new sLogoValid();
            noCommand.setError(true);
            noCommand.setMyStringValue("No command executed");
            return noCommand;
        }
        myModel.addCommandHistory(newCommand);
        return newCommand.execute();
    }


    /**
     * Creates a new command object based on the type of command and arguments given
     * @param command
     * @param args - expression for the command to operate on
     * @return a sLogoValid containing the return information or an error if the command didn't execute properly
     */
    public sLogoValid create(String command, String args){
       String[] arguments = breakdown(args);
       return create(command, arguments);
    }

    private String[] breakdown(String args){
        return args.split("\\s+");
    }
}