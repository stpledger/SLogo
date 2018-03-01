package backEnd;

import java.util.Random;

public class MathCommand extends CommandGroup {

	public MathCommand(String command, String[] args) {
		super(command, args);
		this.mySlogoValid = run(command, args);
	}

	@Override
	public sLogoValid execute(){
		return this.mySlogoValid;
	}

	private sLogoValid run(String command, String[] args){
		if (command.equals("sum")){
			return sum(args);
		}
		else if (command.equals("difference")){
			return difference(args);
		}
		else if (command.equals("product")){
			return product(args);
		}
		else if (command.equals("quotient")){
			return quotient(args);
		}
		else if (command.equals("remainder")){
			return remainder(args);
		}
		else if (command.equals("minus")){
			return minus(args);
		}
		else if (command.equals("random")){
			return random(args);
		}
		else if (command.equals("sin")){
			return sin(args);
		}
		else if (command.equals("cos")){
			return cos(args);
		}
		else if (command.equals("tan")){
			return tan(args);
		}
		else if (command.equals("atan")){
			return atan(args);
		}
		else if (command.equals("log")){
			return log(args);
		}
		else if (command.equals("pow")){
			return pow(args);
		}
		else if (command.equals("pi")){
			return pi();
		}
		else{
			sLogoValid noExecute = new sLogoValid();
			noExecute.setError(true);
			noExecute.setMyStringValue("No command run");
			return noExecute;
		}

	}
	private double get1Double(String[] args){
		return Double.parseDouble(args[0]);
	}

	private double[] get2Doubles(String[] args){
		double[] doubles = new double[2];
		doubles[0] = Double.parseDouble(args[0]);
		doubles[1] = Double.parseDouble(args[1]);
		return doubles;
	}

	private sLogoValid sum(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		double[] doubles = get2Doubles(args);
		double c = doubles[0] + doubles[1];
		tempSLogo.setMyDoubleValue(c);
		return tempSLogo;
	}

	private sLogoValid difference(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		double[] doubles = get2Doubles(args);
		double c = doubles[0] - doubles[1];
		tempSLogo.setMyDoubleValue(c);
		return tempSLogo;
	}

	private sLogoValid product(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		double[] doubles = get2Doubles(args);
		tempSLogo.setMyDoubleValue(doubles[0] * doubles[1]);
		return tempSLogo;
	}

	private sLogoValid quotient(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		double[] doubles = get2Doubles(args);
		double c = doubles[0] / doubles[1];
		tempSLogo.setMyDoubleValue(c);
		return tempSLogo;
	}

	private sLogoValid remainder(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		double[] doubles = get2Doubles(args);
		double c = doubles[0] % doubles[1];
		tempSLogo.setMyDoubleValue(c);
		return tempSLogo;
	}

	private sLogoValid minus(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		tempSLogo.setMyDoubleValue(-1 * get1Double(args));
		return tempSLogo;
	}

	private sLogoValid random(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		Random r = new Random();
		tempSLogo.setMyDoubleValue(get1Double(args) * r.nextDouble());
		return tempSLogo;
	}

	private sLogoValid sin(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		tempSLogo.setMyDoubleValue(Math.sin(get1Double(args)));
		return tempSLogo;
	}

	private sLogoValid cos(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		tempSLogo.setMyDoubleValue(Math.cos(get1Double(args)));
		return tempSLogo;
	}

	private sLogoValid tan(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		tempSLogo.setMyDoubleValue(Math.tan(get1Double(args)));
		return tempSLogo;
	}

	private sLogoValid atan(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		tempSLogo.setMyDoubleValue(Math.atan(get1Double(args)));
		return tempSLogo;
	}

	private sLogoValid log(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		tempSLogo.setMyDoubleValue(Math.log(get1Double(args)));
		return tempSLogo;
	}

	private sLogoValid pow(String[] args){
		sLogoValid tempSLogo = new sLogoValid();
		double[] doubles = get2Doubles(args);
		tempSLogo.setMyDoubleValue(Math.pow(doubles[0], doubles[1]));
		return tempSLogo;
	}

	private sLogoValid pi(){
		sLogoValid tempSLogo = new sLogoValid();
		tempSLogo.setMyDoubleValue(Math.PI);
		return tempSLogo;
	}

}
