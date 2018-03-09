package backEnd;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Model implements ModelModifiable, ModelViewable {
	
	private Map<String, Object> myModel;
	private List<CommandGroup> myPreviousCommands;
	private Map<Integer, String> myAvailableShapes;
	private Map<Integer, ArrayList<Double>> myAvailableColors;
	private int myCurrentShapeIndex = 0;
	private int myCurrentColorIndex = 0;
	
	public Model() {
		myModel = new HashMap<>();
		myModel.put("Turtle", new Turtle(0,0,0));
		initializeShapeChoices();
		initializeColorChoices();
	}
	
	public ArrayList<Double> getColorByIndex(int i) {
		if (myAvailableColors.containsKey(i)) {
			myCurrentColorIndex = i;
			return myAvailableColors.get(i);
		}
		else {
			throw new IndexOutOfBoundsException("The Palette does not recognize this index.");
		}
	}
	
	public String getShapeByIndex(int i) {
		if (myAvailableShapes.containsKey(i)) {
			myCurrentShapeIndex = i;
			return myAvailableShapes.get(i);
		}
		else {
			throw new IndexOutOfBoundsException("The shapes does not recognize this index.");
		}
	}
	
	protected void addColor(int index, ArrayList<Double> rgb) {
		myAvailableColors.put(index, rgb);
	}
	
	private void initializeShapeChoices() {
		myAvailableShapes.put(0, "Turtle.png");
		myAvailableShapes.put(1, "Rectangle.png");
		myAvailableShapes.put(2, "Triangle.png");
		myAvailableShapes.put(3, "Circle.png");
	}
	
	private void initializeColorChoices() {
		for (int i = 0; i < 5; i++) {
			ArrayList<Double> rgb = new ArrayList<>();
			rgb.add(i*25.0);
			rgb.add(256 - i*25.0);
			rgb.add(i*25.0);
			myAvailableColors.put(i, rgb);
		}
	}
	
	@Override
	public Set<Turtle> getTurtlesToModify() {
		Set<Turtle> ret = new HashSet<>();
		ret.add((Turtle)myModel.get("Turtle"));
		return ret;
	}
	
	@Override
	public sLogoValid getVariable(String name) {
		if (!myModel.containsKey(name)) {
			sLogoValid ret = new sLogoValid();
			ret.setError(true);
			ret.setMyStringValue("This object does not exist: " + name);
			return ret;
		}
		else{
			return (sLogoValid)myModel.get(name);
		}
	}
	
	@Override
	public Set<Turtle> getTurtles() {
		Set<Turtle> ret = new HashSet<>();
		ret.add((Turtle)myModel.get("Turtle"));
		return Collections.unmodifiableSet(ret);
	}

	@Override
	public List<CommandGroup> getPreviousCommands() {
		return Collections.unmodifiableList(myPreviousCommands);
	}
	
	@Override
	public Map<String, Object> getCurrentVariables() {
		return Collections.unmodifiableMap(myModel);
	}

	@Override
	public double addVariable(String newVar, Object obj) {
		if (myModel.containsKey(newVar)) {
			return -1;
		}
		else {
			myModel.put(newVar, obj);
			return 0;
		}
	}

	@Override
	public double deleteVariable(String toDelete) {
		if (myModel.containsKey(toDelete)) {
			myModel.remove(toDelete);
			return 0;
		}
		else {
			return -1;
		}
	}

	@Override
	public void addCommandHistory(CommandGroup command) {
		myPreviousCommands.add(0,  command);
	}

}