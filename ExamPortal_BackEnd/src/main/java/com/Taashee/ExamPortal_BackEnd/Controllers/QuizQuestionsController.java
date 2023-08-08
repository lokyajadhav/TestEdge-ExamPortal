package com.Taashee.ExamPortal_BackEnd.Controllers;

import java.util.Collections;
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

import com.Taashee.ExamPortal_BackEnd.Beans.Questions;
import com.Taashee.ExamPortal_BackEnd.Beans.Quiz;
import com.Taashee.ExamPortal_BackEnd.Beans.QuizResult;
import com.Taashee.ExamPortal_BackEnd.Services.ExamPortalService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/questions")
public class QuizQuestionsController {
	int correctAnswers;
	int questionsAttempted;
	int totalScore;
	@Autowired
	private ExamPortalService examPortalService;
	
	@GetMapping("/getQuestion/{id}")
	public Questions getQuestion(@PathVariable String id)
	{
		return examPortalService.getQuestion(id);
	}
	@GetMapping("/getAllQuestions")
	public List<Questions> getAllQuestions()
	{
		return examPortalService.getAllQuestions();
	}
	@PostMapping("/addQuestion")
	public int addQuestion(@RequestBody Questions question)
	{
		return examPortalService.addQuestion(question);
	}
	@PostMapping("/updateQuestion")
	public int updateQuestion(@RequestBody Questions question)
	{
		return examPortalService.updateQuestion(question);
	}
	@DeleteMapping("/deleteQuestion/{id}")
	public int deleteQuestion(@PathVariable String id)
	{
		return examPortalService.deleteQuestion(id);
	}
	@GetMapping("/getQuizQuestions/{id}")
	public List<Questions> getQuizQuestions(@PathVariable String id)
	{
		List<Questions> list= examPortalService.getQuizQuestionsByQuizId(id);
		
		Collections.shuffle(list);
		return list;
	}
	@GetMapping("/getUserQuizQuestions/{id}")
	public List<Questions> getQuizQuestionsforUser(@PathVariable String id)
	{
		List<Questions> list= examPortalService.getQuizQuestionsByQuizId(id);
		list.forEach(question->{
			question.setCorrect_answer(null);
		});
		Collections.shuffle(list);
		return list;
	}
	@PostMapping("/evaluateQuiz")
	public QuizResult evaluateQuiz(@RequestBody List<Questions> questions )
	{
		
		correctAnswers=0;
		questionsAttempted=0;
		totalScore=0;
		QuizResult result;
		questions.forEach(question->{
			Questions dataBaseQuestion=examPortalService.getQuestion(question.getId());
			if(dataBaseQuestion.getCorrect_answer().equals(question.getGivenAnswer()))
			{
				correctAnswers++;
			}
			if(question.getGivenAnswer() !=null )
			{
				questionsAttempted++;
			}
		});
		Quiz quiz=examPortalService.getQuizById(questions.get(0).getQuiz_id());
		
		int eachQuestionMark= quiz.getMax_marks()/quiz.getNumber_of_questions();
		totalScore=eachQuestionMark*correctAnswers;
		
		if(totalScore>=((60*quiz.getMax_marks())/100))
		{
			result=new QuizResult(questionsAttempted, correctAnswers, totalScore, true, quiz.getTitle(), quiz.getMax_marks(),quiz.getNumber_of_questions());

		}
		else
		{
			result=new QuizResult(questionsAttempted, correctAnswers, totalScore, false,quiz.getTitle(), quiz.getMax_marks(), quiz.getNumber_of_questions());

		}
		return result;
		

	}

}
