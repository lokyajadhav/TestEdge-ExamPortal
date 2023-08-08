import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  quizId:any
  Quiz:any
  constructor(private route: Router ,private router: ActivatedRoute,private quizService: QuizService,private location: Location){

  }
  ngOnInit(): void {
    this.router.queryParamMap.subscribe(param=>{
      this.quizId=param.get('quizID')
    })
    this.getQuiz(this.quizId)
  }
  getQuiz(quizId:any)
  {
    this.quizService.getQuiz(quizId).subscribe({
      next:(res)=>{
        this.Quiz=res
      },
      error:(err)=>{
        Swal.fire("Error", 'Error while getting quiz!','error');
      }
    })
  }
  goBack() {
    this.location.back();
  }
  StartQuiz()
  {
    Swal.fire({
      title:'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText:'Start',
      icon:'info'
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.route.navigate(['/startQuiz/'+ this.quizId])
      }
    })
  }

}
