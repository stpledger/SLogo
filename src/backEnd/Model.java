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
	
	public Model() {
		myModel = new HashMap<>();
		myModel.put("Turtle", new Turtle(0,0,0));
		myPreviousCommands = new ArrayList<>();
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
		myPreviousCommands.add(command);
	}

}