package com.Taashee.ExamPortal_BackEnd.Beans;

public class Quiz {
	private String id;
	private String title;
	private String description;
	private int max_marks;
	private int number_of_questions;
	private boolean isActive;
	private String cat_id;
	
	public Quiz(String id, String title, String description, int max_marks, int number_of_questions, boolean isActive,
			String cat_id) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.max_marks = max_marks;
		this.number_of_questions = number_of_questions;
		this.isActive = isActive;
		this.cat_id = cat_id;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getMax_marks() {
		return max_marks;
	}
	public void setMax_marks(int max_marks) {
		this.max_marks = max_marks;
	}
	public int getNumber_of_questions() {
		return number_of_questions;
	}
	public void setNumber_of_questions(int number_of_questions) {
		this.number_of_questions = number_of_questions;
	}
	public boolean getIsActive() {
		return isActive;
	}
	public void setIsActive(boolean isActive) {
		this.isActive = isActive;
	}
	public String getCat_id() {
		return cat_id;
	}
	public void setCat_id(String cat_id) {
		this.cat_id = cat_id;
	}
	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
