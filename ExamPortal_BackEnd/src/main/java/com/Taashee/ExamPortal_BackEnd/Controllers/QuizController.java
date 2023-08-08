package com.Taashee.ExamPortal_BackEnd.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Taashee.ExamPortal_BackEnd.Beans.Quiz;
import com.Taashee.ExamPortal_BackEnd.Services.ExamPortalService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/quiz")
public class QuizController {
	
	@Autowired
	private ExamPortalService examPortalService;
	
	@GetMapping("/getQuiz/{id}")
	public Quiz getQuiz(@PathVariable String id)
	{
		
		return examPortalService.getQuizById(id);
	}
	
	@GetMapping("/getAllQuizzes")
	public List<Quiz> getQuizzes()
	{
		return examPortalService.getallQuizzes();
	}
	@GetMapping("/getAllActiveQuizzes")
	public List<Quiz> getActiveQuizzes()
	{
		return examPortalService.getallActiveQuizzes();
	}
	@GetMapping("/getAllQuizzes/{cat_id}")
	public List<Quiz> getQuizzes(@PathVariable String cat_id)
	{
		return examPortalService.getallQuizzesByCategory(cat_id);
	}
	
	@PostMapping("/addQuiz")
	public int addQuiz(@RequestBody Quiz quiz)
	{
		System.out.println(quiz.getCat_id());
		return examPortalService.addQuiz(quiz);
	}
	@PostMapping("/updateQuiz")
	public int updateQuiz(@RequestBody Quiz quiz)
	{
		
		return examPortalService.updateQuiz(quiz);
	}
	
	@DeleteMapping("/deleteQuiz/{id}")
	public int deleteQuiz(@PathVariable String id)
	{
		return examPortalService.deleteQuizById(id);
	}
}
