import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  isQuestionAdded =new EventEmitter()
  constructor(private http: HttpClient) { }
  getAllQuestions()
  {
    return this.http.get(`http://localhost:8080/questions/getAllQuestions`);
  }
  addQuestion(QuestionsData:any)
  {
    return this.http.post(`http://localhost:8080/questions/addQuestion`,QuestionsData);
  }
  deleteQuestion(questionId: any)
  {
    return this.http.delete(`http://localhost:8080/questions/deleteQuestion/${questionId}`);

  }
  updateQuestion(questionData:any)
  {
    return this.http.post(`http://localhost:8080/questions/updateQuestion`,questionData);
  }
  getQuestion(questionsId: any)
  {
    return this.http.get(`http://localhost:8080/questions/getQuestion/${questionsId}`);

  }
  getQuizQuestions(quizId:any)
  {
    return this.http.get(`http://localhost:8080/questions/getQuizQuestions/${quizId}`);
  }
  getUserQuizQuestions(quizId:any)
  {
    return this.http.get(`http://localhost:8080/questions/getUserQuizQuestions/${quizId}`);
  }
  EvaluateQuiz(data:any)
  {
    return this.http.post(`http://localhost:8080/questions/evaluateQuiz`,data);

  }
}
