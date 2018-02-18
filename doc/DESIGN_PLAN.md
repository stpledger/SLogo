# SLOGO Plan: Team 14

## Team
* Marcus Oertle (mlo11@duke.edu)
* Collin Brown (cdb55@duke.edu)
* Siyuan Chen (sc456@duke.edu)
* Trishul Nagenalli (tn74@duke.edu)
* Scott Pledger (stp20@duke.edu)

## Specification
* External API 1 - 
    * ?
* External API 2 - 
    * ?
* Internal API 1 - 
    * ?
* Internal API 2 - 
    * ?
## Introduction
*Problem*: 
* Our team is trying to design an IDE that allows for users to input commands in the Slogo language to update a GUI. 

*Design Goals*:
* API independent of the GUI
* Encapsulate various parts of the program

*Architecture and Design*:
* At the highest level, we plan to use a View-Model-Controller model to seperate out the functions of our program. This will allow the model to be seperated from the GUI by the API so that they could both be extended independent of eachother. 

## Design Overview
![Design Overview](SLOGO.png "A basic overview of our design")

* View -- The View class is the wrapper class for all of the different elements of the user interface. It will be responsible for updating given a change in the model.
    * turtle_Display -- The turle display class handles the graphic interface of the model. This includes the turtle and the pen.
        * Turtle -- It's an extension of imageView that contains an X and Y coordinate.
    * prompt -- The prompt handles the text-based user input as well as displays the text based machine response. When the user presses enter of pushes the send button the API between the View and the controller.
    * toolbar -- Where the user can set the language, background color, turtle image, etc.
    * explorer -- Displays a list of scripts, user defined functions, available variables, etc (in the selected language for applicable cases)
* Controller -- The controller takes the user input and manages the normailzation, interpretation, and execution of the data by calling various external classes.
    * interpreter -- Takes the data and normalizes it. This involves translating and turning all commands into a similar format.
    * command -- An abstract class for all types of commands that could be called
        * turtleMoveCommand
        * turtleQueryCommand
        * mathCommand
        * booleanCommand
        * variableCommand
        * controlStructureCommand
        * userDefinedCommand
    * slogoValid -- An abstract class for all types of errors that could be encountered
        * slogoSyntaxError
        * slogoModelError
* Model -- Contains all the data
    * turtle -- contains all the information pertaining to the turtle.
    * Pen 

## User Interface
* UI Components (see illustration above for UI design)
    * Turtle display:
        * Displays the Turtle and Pen information
        * The user has no direct influence over this section, all changes will have to go through the prompt 
    * Command prompt:
        * A text interface that works two ways
        * In white is the user input where they can type single and multi-line commands. 
        * In green is the machine's response -- usually doubles after commands
        * In red are errors returned by the machine
    * Toolbar:
        * Series of dropdowns located at the top of the interface
        * Allows the user to select turtle image, pen color, and background color
        * Allows the user to select language
    * Explorer:
        * Series of accordion folders
        * Shows all of the currently avaiable commands and possibly provides documentation

## API Details

```java
public interface Model {
    
}
```

## API Example Code

## Design Considerations

## Team Responsibilities