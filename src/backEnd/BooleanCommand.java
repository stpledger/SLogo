package backEnd;

public class BooleanCommand extends CommandGroup {

    public BooleanCommand(String command, String[] args) {
        super(command, args);
        this.mySlogoValid = run(command, args);
    }

    @Override
    public sLogoValid execute(){
        return this.mySlogoValid;
    }

    private double[] toDouble(String[] args){
        double[] tempDoubles = new double[2];
        for (int i = 0; i < args.length; i++){
            tempDoubles[i] = Double.parseDouble(args[i]);
        }
        return tempDoubles;
    }

    private sLogoValid run(String command, String[] argsS){
        double[] args = toDouble(argsS);
        switch (command){
            case "lessp":
                return less(args);
            case "greaterp":
                return greater(args);
            case "equalp":
                return equal(args);
            case "notequalp":
                return notequal(args);
            case "and":
                return and(args);
            case "or":
                return or(args);
            case "not":
                return not(args);
            default:
                sLogoValid noExecute = new sLogoValid();
                noExecute.setError(true);
                noExecute.setMyStringValue("No command run");
                return noExecute;
        }
    }

    private sLogoValid less(double[] args){
        sLogoValid tempSLogo = new sLogoValid();
        if (args[0] < args[1]){
            tempSLogo.setMyDoubleValue(1);
        }
        else{
            tempSLogo.setMyDoubleValue(0);
        }
        return tempSLogo;
    }

    private sLogoValid greater(double[] args){
        sLogoValid tempSLogo = new sLogoValid();
        if (args[0] > args[1]){
            tempSLogo.setMyDoubleValue(1);
        }
        else{
            tempSLogo.setMyDoubleValue(0);
        }
        return tempSLogo;
    }

    private sLogoValid equal(double[] args){
        sLogoValid tempSLogo = new sLogoValid();
        if (args[0] == args[1]){
            tempSLogo.setMyDoubleValue(1);
        }
        else{
            tempSLogo.setMyDoubleValue(0);
        }
        return tempSLogo;
    }

    private sLogoValid notequal(double[] args){
        sLogoValid tempSLogo = new sLogoValid();
        if (args[0] != args[1]){
            tempSLogo.setMyDoubleValue(1);
        }
        else{
            tempSLogo.setMyDoubleValue(0);
        }
        return tempSLogo;
    }

    private sLogoValid and(double[] args){
        sLogoValid tempSLogo = new sLogoValid();
        if (args[0] > 0 && args[1] > 0){
            tempSLogo.setMyDoubleValue(1);
        }
        else{
            tempSLogo.setMyDoubleValue(0);
        }
        return tempSLogo;
    }

    private sLogoValid or(double[] args){
        sLogoValid tempSLogo = new sLogoValid();
        if (args[0] > 0 || args[1] > 0){
            tempSLogo.setMyDoubleValue(1);
        }
        else{
            tempSLogo.setMyDoubleValue(0);
        }
        return tempSLogo;
    }

    private sLogoValid not(double[] args){
        sLogoValid tempSLogo = new sLogoValid();
        if (args[0] == 0){
            tempSLogo.setMyDoubleValue(1);
        }
        else{
            tempSLogo.setMyDoubleValue(0);
        }
        return tempSLogo;
    }
}
