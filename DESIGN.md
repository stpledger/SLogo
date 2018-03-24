# SLOGO Design Discussion

### High-level design goals of your project:

The high level design goal of this project was to create a model-view-architecture system that could represent the programming environment and the IDE. The information about the state of the programming environment was stored in the back end's model class. This includes a ``Map`` of Variable names to any type of object that represents the value of the variable. Our front-end receives this model through a view-only limiting interface that allows it to display the information in the model. The front-end is the "view" part of the MVC triad. The controller in our case is the interpreter. The front end interacts with the interpreter by sending commands to it through the console. The interpreter then determines how to execute the command on the model and returns a custom object we defined called ``sLogoValid`` that contains information about succesful execution.

### How to Add New Features/Simulations
* New language:
	* Add properties files into resources/languages and resources/ui for the new language
	* Add the language the "languages" array in the Toolbar class
	* That's it! The new language can now be selected from the drop down menu and used. The UI will dynamically change language.
* Adding a new command:
	
### Major Design Choices
* Front-end
	* The front-end is tied together by the IDEBuilder class. The IDEBuilder class creates a Borderpane and then instantiates all of the modules to go inside of it. The IDEBuilder passes itself to the components as a mean for the individual components to communicate.
	* Each individual module in the Borderpane is within its own class and implements the "ComponentBuilder" interface. 
	* This way, each component can be modified separately. If they need to communicate, they can use methods in the instance of the IDEBuilder class passed to them.
* Back-end
    * ?
* Front/back together
	* The back-end is first called by the front-end in the Console class. When the "run" button is pressed, the interpreter's interpret method is called with the console's text as the input.
	* After that completes, the "getCurrentVariables" in the model class is invoked to get the current turtle set. That set is sent to the TurtleDisplayer class to be displayed.

### Assumptions to Simplify/Resolve Ambiguities
* This code heavily assumes that all commands added to a category will work similarly. If that is the case, then adding new commands won't be too difficult. However, if a command doesn't fit into a category, an entire new category must be created. 