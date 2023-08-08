package com.Taashee.ExamPortal_BackEnd.Beans;

public class Questions {
	private String id;
	private String content;
	private String correct_answer;
	private String givenAnswer;
	public String getGivenAnswer() {
		return givenAnswer;
	}
	public Questions(String id, String content, String correct_answer, String givenAnswer, String image,
			String option_A, String option_B, String option_C, String option_D, String quiz_id) {
		super();
		this.id = id;
		this.content = content;
		this.correct_answer = correct_answer;
		this.givenAnswer = givenAnswer;
		this.image = image;
		this.option_A = option_A;
		this.option_B = option_B;
		this.option_C = option_C;
		this.option_D = option_D;
		this.quiz_id = quiz_id;
	}
	public void setGivenAnswer(String givenAnswer) {
		this.givenAnswer = givenAnswer;
	}
	public Questions() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String image;
	private String option_A;
	private String option_B;
	private String option_C;
	private String option_D;
	private String quiz_id;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getCorrect_answer() {
		return correct_answer;
	}
	public void setCorrect_answer(String correct_answer) {
		this.correct_answer = correct_answer;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getOption_A() {
		return option_A;
	}
	public void setOption_A(String option_A) {
		this.option_A = option_A;
	}
	public String getOption_B() {
		return option_B;
	}
	public void setOption_B(String option_B) {
		this.option_B = option_B;
	}
	public String getOption_C() {
		return option_C;
	}
	public void setOption_C(String option_C) {
		this.option_C = option_C;
	}
	public String getOption_D() {
		return option_D;
	}
	public void setOption_D(String option_D) {
		this.option_D = option_D;
	}
	public String getQuiz_id() {
		return quiz_id;
	}
	public void setQuiz_id(String quiz_id) {
		this.quiz_id = quiz_id;
	}
	public Questions(String id, String content, String correct_answer, String image, String option_A, String option_B,
			String option_C, String option_D, String quiz_id) {
		super();
		this.id = id;
		this.content = content;
		this.correct_answer = correct_answer;
		this.image = image;
		this.option_A = option_A;
		this.option_B = option_B;
		this.option_C = option_C;
		this.option_D = option_D;
		this.quiz_id = quiz_id;
	}
	
	
	
}
