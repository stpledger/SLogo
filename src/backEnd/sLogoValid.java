package backEnd;

public class sLogoValid {
	private boolean isError;
	private String myStringValue;
	private double myDoubleValue;
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
		this.setMyStringValue(Double.toString(this.getMyDoubleValue()));
	}

	public String getMyStringValue() {
		return myStringValue;
	}

	public void setMyStringValue(String myStringValue) {
		this.myStringValue = myStringValue;
	}
	
	public void setBoolean(Boolean myBoolean) {
		if(myBoolean) {
			this.setMyDoubleValue(1);
			this.setMyStringValue("true");
		} else {
			this.setMyDoubleValue(0);
			this.setMyStringValue("false");
		}
	}
	
}
