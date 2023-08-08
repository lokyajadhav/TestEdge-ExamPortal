package com.Taashee.ExamPortal_BackEnd.Beans;

public class JWTResponseModel {
	private Users user;
	private String jwtToken;
	private String Error;
	public JWTResponseModel(Users user, String jwtToken, String error) {
		super();
		this.user = user;
		this.jwtToken = jwtToken;
		Error = error;
	}
	public String getError() {
		return Error;
	}
	public void setError(String error) {
		Error = error;
	}
	public JWTResponseModel(Users user, String jwtToken) {
		super();
		this.user = user;
		this.jwtToken = jwtToken;
	}
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	public String getJwtToken() {
		return jwtToken;
	}
	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

}
