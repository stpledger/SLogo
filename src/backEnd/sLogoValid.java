package backEnd;

public class sLogoValid {
	private boolean isError;
	private String myStringValue;
	private Double myDoubleValue;
	public sLogoValid() {
		isError = false;
		setMyStringValue("");
	}
	
	public sLogoValid(Boolean e, String s) {
		super();
		isError = e;
		myStringValue = s;
	}
	
	public sLogoValid(Boolean b) {
		super();
		this.setBoolean(b);
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
		this.setError(false);
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
	
	public String toString() {
		if (myDoubleValue != null) return "" + myDoubleValue;
		return getMyStringValue();
	}
}
