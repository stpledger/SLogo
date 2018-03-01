package backEnd;

public class sLogoValid {
	private boolean isError;
	private String myStringValue;
	private Double myDoubleValue;
	public sLogoValid() {
		isError = false;
		setMyStringValue("");
	}
	
	//Getters and Setters
	/**
	 * Sets the isError attribute to boolean b
	 * @param b
	 */
	public void setError(boolean b) {
		isError = b;	
	}
	/**
	 * Returns the boolean value of the isError Property
	 * @return
	 */
	public boolean getError() {
		return isError; 
	}

	public double getMyDoubleValue() {
		return myDoubleValue;
	}

	public void setMyDoubleValue(double myDoubleValue) {
		this.myDoubleValue = myDoubleValue;
	}

	public String getMyStringValue() {
		return myStringValue;
	}

	public void setMyStringValue(String myStringValue) {
		this.myStringValue = myStringValue;
	}
	
	public String toString() {
		if (myDoubleValue != null) return "" + myDoubleValue;
		return getMyStringValue();
	}
	
}
