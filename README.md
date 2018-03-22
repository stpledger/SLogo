# SLOGO Team 14

CompSci 308 SLOGO Project

*Date Started*: February 13, 2018

*Date Finished*: March 9, 2018

## Project information
### Team members:
* Marcus Oertle (mlo11@duke.edu) - Front-end
* Collin Brown (cdb55@duke.edu) - Interpreter
* Siyuan Chen (sc456@duke.edu) - Model
* Trishul Nagenalli (tn74@duke.edu) - Front-end
* Scott Pledger (stp20@duke.edu) - Back-end

### Resources used
* Design based on this [Logo Interpreter](http://www.calormen.com/jslogo/) 

### Important files
* [MainApplication.java](https://coursework.cs.duke.edu/CompSci308_2018Spring/slogo_team14/blob/master/src/frontend/MainApplication.java) in package "frontend" is used to start the application.
* Resource files:
	* ["resources"](https://coursework.cs.duke.edu/CompSci308_2018Spring/slogo_team14/tree/master/src/resources) folder in "src" directory
		* ["languages"](https://coursework.cs.duke.edu/CompSci308_2018Spring/slogo_team14/tree/master/src/resources/languages) folder in "resources" directory contains command properties file for languages
		* ["ui"](https://coursework.cs.duke.edu/CompSci308_2018Spring/slogo_team14/tree/master/src/resources/ui) folder in "resources" directory contains ui label properties file for languages
	* ["images"](https://coursework.cs.duke.edu/CompSci308_2018Spring/slogo_team14/tree/master/images) folder in main directory contains the turtle images for the project

## Controls
### Console
* *Run* - runs the command that is entered into the command prompt
* *Clear* - clears
* *Open...* - allows user to open a SLOGO file to be run
* *Save As* - save the command(s) currently in the console window

### Turtle Display
* *fd* - moves the turtle forward by 20
* *bk* - moves the turtle backward by 20
* *lt* - rotates turtle left 10 degrees
* *rt* - rotates turtle right 10 degrees
* *show* - shows the turtle
* *hide* - hides the turtle
* *home* - returns turtle to center of screen
* *clear* - clears the screen
* *Pen Up* - stops drawing lines
* *Pen Down* - resumes drawing lines
* *Make Turtle* - adds a second turtle
* *Rem Turtle* - removes all turtles
* RED MESSAGE - error messsage
* BLUE MESSAGE - return value

### Sidebar
* Previous Commands
	* clicking on a previous command in the list will run it

### Toolbar
* *English* - the default language in the drop down menu. Selecting another language will change the program to that language.
* *Select Background Color* - changes background color
* *Select Turtle Name* - selects the turtle to work with
* *Select Image* - changes image for selected turtle, defaults to last created turtle
* *Select Pen Color* - changes the pen color
* *Help* - brings user to webpage with command list

## Assumptions
* If file has correct extension (ie. .png or .jpg for images or .logo for SLOGO files) then it is actually a valid file for that type. Program will not crash regardless, but will not throw an error visible to user if the file has correct extension but does not work.

## Known bugs
* Extra turtle feature was broken by backend in the last day.
* UI changes language and commands from buttons are sent in that language from buttons to backend, however they are not interpreted and run correctly.

## Impressions of the project
* The project was really fun overall and good exercise with API design. The results were not great due to lack of group meeting attendance, but the project itself came together decently.

## Visuals Decisions
* Window size locked so we do not have to scale GUI
* Borderpane was chosen so that we could have different components doing separate things (ie. turtle display, console, sidebar, toolbar) in the same window
* Each component of the borderpane is its own class that allowed much easier editing of each individual component. 
* Turtle class is where the position and angle and such are updated. The TurtleDisplayer class merely corrects the coordinates to fit into the window and then re-draws all turtles and lines after each command instead of moving around existing ones. This way it was easy to handle showing, hiding, clearing, returning home, etc in the back-end and there is less to worry about in that regard in the front-end. This design also makes the program more extendible because new commands require no changes on the front-end.

## Unimplemented Back-End Features 
* ?

## Possible Improvements
* Add support for other language commands to actually work...
* Make additional turtles work again (since it was working on Thursday night...)
* Refactor out all dependencies on front-end on other front-end components. Link them all through the IDEBuilder.java class instead so ONLY that builder needs to be passed into each component.