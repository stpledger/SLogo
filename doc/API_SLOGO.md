### API_SLOGO.md Team 14

## Team
* Marcus Oertle (mlo11@duke.edu)
* Collin Brown (cdb55@duke.edu) - ABSENT
* Siyuan Chen (sc456@duke.edu)
* Trishul Nagenalli (tn74@duke.edu)
* Scott Pledger (stp20@duke.edu)


## SLogo Architecture Design Questions:

1.  When does parsing need to take place and what does it need to start properly?
    * Between when the front end receives input from the user and when actual commands are exceuted in the backend.
    * It just needs the string input from the user command.
2.  What is the result of parsing and who receives it?
    * A "command" object. This object will likely extend from an abstract class that has abstract signatures for an "implement method." This implement method takes care of the actual functionality of the command.
    * The command object is passed to a backend which keeps track of the state of the program's data. It will interpret the command object and modify the data.
3.  When are errors detected and how are they reported?
    * During parsing. If the parser fails to recognize a command, it asks the front end to throw an alert dialog message.
    * Errors are detected by the intermediate parsing layer. 
4.  What do commands know, when do they know it, and how do they get it?
    * Commands know their functionality in terms of an API that describes how the data of the program can be modified.
    * Commands are created by the middle layer which interprets text input from the visualization and passes a command object to the back end.
    * The back end takes care of executing the command.
5.  How is the GUI updated after a command has completed execution?
    * An API between back-end processing and front end tells the front end the new position/orientation/etc for all objects on screen (the turtle, in the basic case) and the visuals are updated accordingly.
    * For lines, they will be tied to the main moving object so that if we have multiple moving objects and we need to erase a single one, we can remove all of its lines (or anything else that it is extended to) without touching the others.

## Roles

Things Front End could do:
* Select Language
* Alert user to invalid commands
* Update "moving object" and "line" visuals to match back-end processed values
* Display 

Middle Layer:
* Parser
* Error Checking
* Throws error passed to front end

Back End:
* Store Moving Objects
    * Subclassed by Turtle
* Command object 
    * Implments a reversible method that restores state of program to what it was before the commmand was executed.
* Store a history that can be reversed. 

## API's (four total, two per category)

### External
* How you plan to separate the graphical interface from the interpreter and how you plan to let them communicate when necessary.
* What objects will be used for communication: making it clear how needed information will get where it is needed, what will be available and what will be encapsulated, what things will be immutable, and what errors may be thrown.
 * Note, all of these methods will need to be `public`.

#### Intepreter
```java
public class Interpreter{
    public SLOGOException interpret (String command){
    if (isValid(command)) {
        backend.execute(new RotateCommand(command));
        return new CorrectCommand();
    } else {
        return new SyntaxException(command);
    }
    }
}
```

#### GUI
```javascript=
public class GUI{
    public void updateEnvironmentColor();
    public void updateMovingObjects(List l);
    
}
```

### Internal
* How you plan to provide paths for extension through interfaces, inheritance, and design patterns for new features you might reasonably expect to be added to the program.
* What subclasses or implementing classes will be used to extend your part to add new features: making it clear what kind of code someone will be expected to write, what parts of your code you expect to be closed to modification, and what errors may be thrown.
* Note, while some of these methods may be `public`, many may be `protected` or package friendly.

#### Exception

The exception hierarchy would be defined as a means to communicate to the user that something in the program went wrong. A possible highest level abstraction of it is shown below.
```java
public abstract class SLOGOException{
    public void correctMessage();
    
    /*
    * Implement as the message the program would like to 
    * tell the user if something went wrong.
    */
    public abstract String toString() {}
}
```

This class could be extended to include SLOGOExceptions that would have roots in different types of commands and thus different messages to show the reader. An exception that arose during parsing might instantiate a subclass of ``SLOGOException`` called ``SyntaxException`` for example, or an an attempt to throw a command with the wrong parameters might throw an ``InvalidParametersException.`` An example implementation of ``SyntaxException`` is given below:

```java
public class SyntaxException extends SLOGOException {
    
    private String badCommand = ""
    public SyntaxException(String theBadCommand) {
        badCommand = theBadCommand;
    }
    
    public toString() {
        return ("The command " + badCommand " is invalid!");
    }
}
```

#### BackEndModification API
```java
public class BackEndModification{
    public void revert(int numSteps);
    public List getDisplayables();
    
}
```

## Use Cases
* The user types 'fd 50' in the command window, sees the turtle move in the display window leaving a trail, and has the command added to the environment's history.
    * User inputs string 'fd 50' into command window
    * Front-end system takes string input and gives it to the Interpretor
    * Interpretor decides that the string input is valid
    * Interpretor creates new command object, passes to backend to update the data for the object (the turtle) accordingly
    * Backend calculates new turtle position and stores it in its history
    * Backend returns the updated information about the turtle to the front-end which then updates the visuals accordingly
* The user types '50 fd' in the command window and sees an error message that the command was not formatted correctly.
    * User inputs string '50 fd' into command window
    * Front-end system takes the string inputs and gives it to the Interpretor
    * Interpretor decides that string is NOT valid, throws custom exception
    * Exception tells front-end to display a specified message to user
* The user types 'pu fd 50 pd fd 50' in the command window and sees the turtle move twice (once without a trail and once with a trail).
    * User inputs string 'pu fd 50 pd fd 50' into command window
    * Front-end system takes string input and gives it to the Interpretor
    * Interpretor decides that the string input is valid
    * Interpretor creates 4 command objects and puts the in a list, then sends them to the backend
    * Backend receives list of command objects in order to update the data for the object (the turtle) accordingly
    * Backend starts going through list of commands 1 at a time
    * Backend sets pen to be up
    * Backend calculates new turtle position and stores it in its history
    * Backend sets pen to be down
    * Backend calculate new turtle position and stores it in its history as well as adding a line to the "turtle" class with start point equal to where the turtle started and end point where the turtle finished
    * Backend returns the updated information about the turtle (and the lines within the turtle class) to the front-end which then updates the visuals accordingly
* The user changes the color of the environment's background.
    * User inputs command for changing color
    * Front-end gets string and sends it to Interpretor
    * Intpretor creates new command object and sends it to backend
    * Backend interprets command object, tells front-end to update its environment background with the specifed color 
    * Front-end changes its environment color