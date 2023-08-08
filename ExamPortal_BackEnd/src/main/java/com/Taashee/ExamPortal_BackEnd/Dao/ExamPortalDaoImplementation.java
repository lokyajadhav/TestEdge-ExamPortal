package com.Taashee.ExamPortal_BackEnd.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.Taashee.ExamPortal_BackEnd.Beans.Categories;
import com.Taashee.ExamPortal_BackEnd.Beans.Questions;
import com.Taashee.ExamPortal_BackEnd.Beans.Quiz;
import com.Taashee.ExamPortal_BackEnd.Beans.Users;
@Repository
public class ExamPortalDaoImplementation implements ExamPortalDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Override
	public int registerUser(Users user) throws Exception {
		Users isUserExist=getUserByUserName(user.getUsername());
		if(isUserExist!=null)
		{
			throw new Exception("UserAlreadyExist Please Login");
		}
		else {
		String addQuery="INSERT into users(username,password,firstname,lastname,email,mobile,isActive, about,role) values(?,?,?,?,?,?,?,?,?)";
		return jdbcTemplate.update(addQuery,new Object[] {user.getUsername(),user.getPassword(), user.getFirstname(), user.getLastname(), user.getEmail(),user.getMobile(),true,user.getAbout(),user.getRole()});
		}
	}
	@Override
	public Users getUserByUserName(String username) {
		// TODO Auto-generated method stub
		try
		{
			String getQuery="SELECT * from users where username =?";
			return jdbcTemplate.queryForObject(getQuery, new BeanPropertyRowMapper<Users>(Users.class), new Object[] {username});
		}
			catch(EmptyResultDataAccessException e)
		{
				return null;
		}
	}
	@Override
	public int updateUser(Users user) {
		String updateQuery="UPDATE users set firstname=?, lastname=?,email=?,mobile=?,about=? where username=?";
		return jdbcTemplate.update(updateQuery, new Object[] {user.getFirstname(),user.getLastname(),user.getEmail(), user.getMobile(),user.getAbout(),user.getUsername()});
	}
	@Override
	public List<Categories> getAllCategories() {
		String getQuery="select * from categories";
		return jdbcTemplate.query(getQuery, new BeanPropertyRowMapper<Categories>(Categories.class));
		
	}
	@Override
	public int addCategory(Categories category) throws Exception {
		try
		{
			String addQuery="INSERT into categories(id, title, description) values(?,?,?)";
			return jdbcTemplate.update(addQuery, new Object[] {category.getId(), category.getTitle(), category.getDescription()});
		}
		catch(Exception e)
		{
			throw new Exception("Category Id already Exist!");
		}
	}
	@Override
	public int updateCategory(Categories category) {
		String updateQuery="UPDATE categories set title=?,description=? where id=?";
		return jdbcTemplate.update(updateQuery, new Object[] {category.getTitle(), category.getDescription(), category.getId()});
	}
	@Override
	public int deleteCategory(String id) {
		String deleteQuery="DELETE from categories where id =?";
		
		return jdbcTemplate.update(deleteQuery, new Object[] {id});
	}
	@Override
	public Categories getCategoryById(String id) {
		String getQuery="SELECT * from categories where id=?";
		return jdbcTemplate.queryForObject(getQuery, new BeanPropertyRowMapper<Categories>(Categories.class), new Object[] {id});
	}
	@Override
	public Quiz getQuizById(String id) {
		String getQuery="SELECT * from quiz where id=?";
		
		return jdbcTemplate.queryForObject(getQuery, new BeanPropertyRowMapper<Quiz>(Quiz.class), new Object[] {id});
	}
	@Override
	public List<Quiz> getAllQuizzes() {
		String getQuery="SELECT * from quiz";
		return jdbcTemplate.query(getQuery, new BeanPropertyRowMapper<Quiz>(Quiz.class));
	}
	@Override
	public int addQuiz(Quiz quiz) {
		String addQuery="INSERT into quiz(id,title,description,max_marks,number_of_questions,isActive,cat_id) values(?,?,?,?,?,?,?)";
		return jdbcTemplate.update(addQuery, new Object[] {quiz.getId(), quiz.getTitle(),quiz.getDescription(),quiz.getMax_marks(),quiz.getNumber_of_questions(),quiz.getIsActive(), quiz.getCat_id()});
	}
	@Override
	public int updateQuiz(Quiz quiz) {
		String updateQuery="UPDATE quiz set title=?,description=?,max_marks=?,number_of_questions=?,isActive=?,cat_id=? where id=?";
		return jdbcTemplate.update(updateQuery,new Object[] {quiz.getTitle(),quiz.getDescription(),quiz.getMax_marks(),quiz.getNumber_of_questions(),quiz.getIsActive(),quiz.getCat_id(),quiz.getId()});
	}
	@Override
	public int deleteQuizById(String id) {
		String deleteQuery="DELETE from quiz where id=?";
		return jdbcTemplate.update(deleteQuery,new Object[] {id});
	}
	@Override
	public Questions getQuestion(String id) {
		String getQuery="SELECT * from questions where id=?";
		return jdbcTemplate.queryForObject(getQuery, new BeanPropertyRowMapper<Questions>(Questions.class), new Object[] {id});
	}
	@Override
	public List<Questions> getAllQuestions() {
		String getQuery="SELECT * from Questions";
		
		return jdbcTemplate.query(getQuery, new BeanPropertyRowMapper<Questions>(Questions.class));
	}
	@Override
	public int addQuestion(Questions question) {
		String addQuery="INSERT into questions(id,content,correct_answer,option_A,option_B,option_C,option_D,quiz_id) values(?,?,?,?,?,?,?,?)";
		return jdbcTemplate.update(addQuery,new Object[] {question.getId(), question.getContent(),question.getCorrect_answer(),question.getOption_A(),question.getOption_B(),question.getOption_C(),question.getOption_D(),question.getQuiz_id()});
	}
	@Override
	public int updateQuestion(Questions question) {
		String updateQuery="UPDATE questions set content=?, correct_answer=?,option_A=?,option_B=?,option_C=?,option_D=?,quiz_id=? where id=?";
		return jdbcTemplate.update(updateQuery,new Object[] {question.getContent(), question.getCorrect_answer(),question.getOption_A(),question.getOption_B(),question.getOption_C(),question.getOption_D(),question.getQuiz_id(),question.getId()});
	}
	@Override
	public int deleteQuestion(String id) {
		String deleteQuery="DELETE from questions where id=?";
		return jdbcTemplate.update(deleteQuery, new Object[] {id});
	}
	@Override
	public List<Questions> getQuizQuestionsByQuizId(String id) {
		String getQuery="SELECT * from questions where quiz_id=?";
		return jdbcTemplate.query(getQuery, new BeanPropertyRowMapper<Questions>(Questions.class), new Object[] {id});
	}
	@Override
	public List<Quiz> getAllActiveQuizzes() {
		String getQuery="SELECT * from quiz where isActive=?";
		return jdbcTemplate.query(getQuery, new BeanPropertyRowMapper<Quiz>(Quiz.class), new Object[] {true});
	}
	@Override
	public List<Quiz> getQuizzesByCategory(String cat_id) {
		String getQuery="SELECT * from quiz where cat_id=? and isActive=?";
		return jdbcTemplate.query(getQuery, new BeanPropertyRowMapper<Quiz>(Quiz.class), new Object[] {cat_id,true});
	}

}
