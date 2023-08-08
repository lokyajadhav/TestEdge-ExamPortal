package com.Taashee.ExamPortal_BackEnd.Dao;

import java.util.List;

import com.Taashee.ExamPortal_BackEnd.Beans.Categories;
import com.Taashee.ExamPortal_BackEnd.Beans.Questions;
import com.Taashee.ExamPortal_BackEnd.Beans.Quiz;
import com.Taashee.ExamPortal_BackEnd.Beans.Users;

public interface ExamPortalDao {

	int registerUser(Users user) throws Exception;

	Users getUserByUserName(String username);

	int updateUser(Users user);

	List<Categories> getAllCategories();

	int addCategory(Categories category) throws Exception;

	int updateCategory(Categories category);

	int deleteCategory(String id);

	Categories getCategoryById(String id);

	Quiz getQuizById(String id);

	List<Quiz> getAllQuizzes();

	int addQuiz(Quiz quiz);

	int updateQuiz(Quiz quiz);

	int deleteQuizById(String id);

	Questions getQuestion(String id);

	List<Questions> getAllQuestions();

	int addQuestion(Questions question);

	int updateQuestion(Questions question);

	int deleteQuestion(String id);

	List<Questions> getQuizQuestionsByQuizId(String id);

	List<Quiz> getAllActiveQuizzes();

	List<Quiz> getQuizzesByCategory(String cat_id);

}
