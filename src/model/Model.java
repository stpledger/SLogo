package model;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Model implements ModelModifiable, ModelViewable {
	
	private Map<String, Object> myModel;
	private Set<Command> myPreviousCommands;
	
	public Model() {
		myModel = new HashMap<>();
		myPreviousCommands = new HashSet<>();
	}

	@Override
	public Set<Turtle> getTurtles() {
		Set<Turtle> ret = new HashSet<>();
		ret.add((Turtle)myModel.get("Turtle"));
		return ret;
	}

	@Override
	public Set<Command> getPreviousCommands() {
		return Collections.unmodifiableSet(myPreviousCommand);
	}
	
	@Override
	public Map<String, Object> getCurrentVariables() {
		return Collections.unmodifiableMap(myModel);
	}

	@Override
	public double addVariable(String newVar) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public double deleteVariable(String toDelete) {
		// TODO Auto-generated method stub
		return 0;
	}

}
