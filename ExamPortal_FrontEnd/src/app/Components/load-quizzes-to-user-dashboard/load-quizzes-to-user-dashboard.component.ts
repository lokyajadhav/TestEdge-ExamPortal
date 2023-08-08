import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quizzes-to-user-dashboard',
  templateUrl: './load-quizzes-to-user-dashboard.component.html',
  styleUrls: ['./load-quizzes-to-user-dashboard.component.css']
})
export class LoadQuizzesToUserDashboardComponent implements OnInit {
  constructor( private route: ActivatedRoute, private quizService: QuizService){}
  quizzes:any
  categoryTitle:any
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {

      if(params.get('categoryID') === 'allQuizzes')
      {
        this.categoryTitle=''
        this.getAllQuizzes();
      }
      else{
        this.categoryTitle=params.get('categoryTitle')
        this.getQuizzesByCategory(params.get('categoryID'))
      }
  })
  }
  getAllQuizzes()
  {
    this.quizService.getAllActiveQuizzes().subscribe({
      next:(res)=>{
        this.quizzes=res;
      },
      error:(err)=>{
        Swal.fire("Error" ,'error while getting quizzes','error');
      }
    })
  }
  getQuizzesByCategory(categoryId:any)
  {
    this.quizService.getQuizzesByCategory(categoryId).subscribe({
      next:(res)=>{
        this.quizzes=res
      },
      error:(err)=>{
        Swal.fire("Error",'error while gettingquizzes','error')
      }
    })
  }
}
