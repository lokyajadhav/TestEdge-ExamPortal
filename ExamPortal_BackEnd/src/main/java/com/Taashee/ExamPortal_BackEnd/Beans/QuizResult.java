package com.Taashee.ExamPortal_BackEnd.Beans;

public class QuizResult {
		private int numberOfQuestionsAttempted;
		private int correctAnswers;
		private int securedScore;
		private boolean isCleared;
		private String Quiz;
		private int max_marks;
		public String getQuiz() {
			return Quiz;
		}
		public void setQuiz(String quiz) {
			Quiz = quiz;
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
		public void setCleared(boolean isCleared) {
			this.isCleared = isCleared;
		}
		private int number_of_questions;
		public boolean getIsCleared() {
			return isCleared;
		}
		public void setIsCleared(boolean isCleared) {
			this.isCleared = isCleared;
		}
		
		public int getNumberOfQuestionsAttempted() {
			return numberOfQuestionsAttempted;
		}
		public void setNumberOfQuestionsAttempted(int numberOfQuestionsAttempted) {
			this.numberOfQuestionsAttempted = numberOfQuestionsAttempted;
		}
		public int getCorrectAnswers() {
			return correctAnswers;
		}
		public void setCorrectAnswers(int correctAnswers) {
			this.correctAnswers = correctAnswers;
		}
		public int getSecuredScore() {
			return securedScore;
		}
		public void setSecuredScore(int securedScore) {
			this.securedScore = securedScore;
		}
		public QuizResult(int numberOfQuestionsAttempted, int correctAnswers, int securedScore) {
			super();
			this.numberOfQuestionsAttempted = numberOfQuestionsAttempted;
			this.correctAnswers = correctAnswers;
			this.securedScore = securedScore;
		}
		public QuizResult(int questionsAttempted, int correctAnswers, int totalScore, boolean isCleared2, String Quiz, int max_marks, int questions) {
			super();
			this.numberOfQuestionsAttempted = questionsAttempted;
			this.correctAnswers = correctAnswers;
			this.securedScore = totalScore;
			this.isCleared = isCleared2;
			this.Quiz=Quiz;
			this.max_marks=max_marks;
			this.number_of_questions=questions;
		}
		
		
}
