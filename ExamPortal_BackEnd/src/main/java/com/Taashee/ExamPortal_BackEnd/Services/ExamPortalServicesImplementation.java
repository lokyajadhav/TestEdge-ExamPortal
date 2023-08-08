package com.Taashee.ExamPortal_BackEnd.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Taashee.ExamPortal_BackEnd.Beans.Categories;
import com.Taashee.ExamPortal_BackEnd.Beans.Questions;
import com.Taashee.ExamPortal_BackEnd.Beans.Quiz;
import com.Taashee.ExamPortal_BackEnd.Beans.Users;
import com.Taashee.ExamPortal_BackEnd.Dao.ExamPortalDao;
@Service
public class ExamPortalServicesImplementation implements ExamPortalService {
	@Autowired
	private ExamPortalDao examPortalDao;
	@Override
	public int registerUser(Users user) throws Exception {
		// TODO Auto-generated method stub
		return examPortalDao.registerUser(user);
	}
	@Override
	public Users getUser(String username) {
		// TODO Auto-generated method stub
		return examPortalDao.getUserByUserName(username);
	}
	@Override
	public int updateUser(Users user) {
		// TODO Auto-generated method stub
		return examPortalDao.updateUser(user);
	}
	@Override
	public List<Categories> getAllCategories() {
		// TODO Auto-generated method stub
		return examPortalDao.getAllCategories();
	}
	
	@Override
	public int addCategory(Categories category) throws Exception {
		// TODO Auto-generated method stub
		return examPortalDao.addCategory(category);

	}
	@Override
	public int updateCategory(Categories category) {
		// TODO Auto-generated method stub
		return examPortalDao.updateCategory(category);
	}
	@Override
	public int deleteCategory(String id) {
		// TODO Auto-generated method stub
		return examPortalDao.deleteCategory(id);
	}
	@Override
	public Categories getCategoryById(String id) {
		// TODO Auto-generated method stub
		return examPortalDao.getCategoryById(id);
	}
	@Override
	public Quiz getQuizById(String id) {
		// TODO Auto-generated method stub
		return examPortalDao.getQuizById(id);
	}
	@Override
	public List<Quiz> getallQuizzes() {
		// TODO Auto-generated method stub
		return examPortalDao.getAllQuizzes();
	}
	@Override
	public int addQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return examPortalDao.addQuiz(quiz);
	}
	@Override
	public int updateQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return examPortalDao.updateQuiz(quiz);
	}
	@Override
	public int deleteQuizById(String id) {
		// TODO Auto-generated method stub
		return examPortalDao.deleteQuizById(id);
	}
	@Override
	public Questions getQuestion(String id) {
		// TODO Auto-generated method stub
		return examPortalDao.getQuestion(id);
	}
	@Override
	public List<Questions> getAllQuestions() {
		// TODO Auto-generated method stub
		return examPortalDao.getAllQuestions();
	}
	@Override
	public int addQuestion(Questions question) {
		// TODO Auto-generated method stub
		return examPortalDao.addQuestion(question);
	}
	@Override
	public int updateQuestion(Questions question) {
		// TODO Auto-generated method stub
		return examPortalDao.updateQuestion(question);
	}
	@Override
	public int deleteQuestion(String id) {
		// TODO Auto-generated method stub
		return examPortalDao.deleteQuestion(id);
	}
	@Override
	public List<Questions> getQuizQuestionsByQuizId(String id) {
		// TODO Auto-generated method stub
		return examPortalDao.getQuizQuestionsByQuizId(id);
	}
	@Override
	public List<Quiz> getallActiveQuizzes() {
		// TODO Auto-generated method stub
		return examPortalDao.getAllActiveQuizzes();
	}
	@Override
	public List<Quiz> getallQuizzesByCategory(String cat_id) {
		// TODO Auto-generated method stub
		return examPortalDao.getQuizzesByCategory(cat_id);
	}

}
