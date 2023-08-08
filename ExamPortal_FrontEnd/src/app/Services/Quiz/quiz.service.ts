import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  isCategoryAdded =new EventEmitter()
  constructor(private http: HttpClient) { }
  getAllQuizzes()
  {
    return this.http.get(`http://localhost:8080/quiz/getAllQuizzes`);
  }
  getAllActiveQuizzes()
  {
    return this.http.get(`http://localhost:8080/quiz/getAllActiveQuizzes`);
  }
  addQuiz(QuizData:any)
  {
    return this.http.post(`http://localhost:8080/quiz/addQuiz`,QuizData);
  }
  deleteQuiz(quizId: any)
  {
    return this.http.delete(`http://localhost:8080/quiz/deleteQuiz/${quizId}`);

  }
  updateQuiz(QuizData:any)
  {
    return this.http.post(`http://localhost:8080/quiz/updateQuiz`,QuizData);
  }
  getQuiz(quizId: any)
  {
    return this.http.get(`http://localhost:8080/quiz/getQuiz/${quizId}`);

  }
  getQuizzesByCategory(categoryId: any)
  {
    return this.http.get(`http://localhost:8080/quiz/getAllQuizzes/${categoryId}`);

  }
}
