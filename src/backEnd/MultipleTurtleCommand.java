package backEnd;

public class MultipleTurtleCommand extends CommandGroup{
    private ModelModifiable myModel;

    public MultipleTurtleCommand(String command, String[] args, ModelModifiable model) {
        super(command, args);
        myModel = model;
        this.mySlogoValid = run(command, args);
    }

    @Override
    public sLogoValid execute() {
        return this.mySlogoValid;
    }

    public sLogoValid run(String command, String[] args){
        switch (command){
            case "id":
                return id();
            case "turtles":
                return turtles();
            case "tell":
                return tell(args);
            default:
                sLogoValid noExecute = new sLogoValid();
                noExecute.setError(true);
                noExecute.setMyStringValue("No command run");
                return noExecute;
        }
    }

    private sLogoValid id(){
        sLogoValid temp = new sLogoValid();
        temp.setMyDoubleValue(myModel.getActiveTurtleID());
        return temp;
    }

    private sLogoValid turtles(){
        sLogoValid temp = new sLogoValid();
        temp.setMyDoubleValue(myModel.numOfTurtles());
        return temp;
    }

    private sLogoValid tell(String[] args){
        sLogoValid temp = new sLogoValid();
        int[] IDs = new int[args.length];
        for(int i = 0; i < args.length; i++){
            IDs[i] = Integer.parseInt(args[i]);
        }
        temp.setMyDoubleValue(myModel.setActiveTurtles(IDs));
        return temp;
    }
}
