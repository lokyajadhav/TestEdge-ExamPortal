import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit {
  quizId:any;
  Quiz:any
  constructor(private route: Router ,private location:Location, private router: ActivatedRoute, private quizService:QuizService)
  {

  }
  ngOnInit(): void {
    this.router.queryParamMap.subscribe(param=>{
      this.quizId=param.get('id')
    })
   this.getQuiz(this.quizId)
  }
  goBack() {
    this.location.back();
  }
  getQuiz(QuizId:any)
  {
    this.quizService.getQuiz(QuizId).subscribe({
      next:(res)=>{
        this.Quiz=res
      },
      error:(err)=>{
        Swal.fire("Error","error while getting Quiz",'error')
      }
    })
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
        this.route.navigate(['/startQuiz/'],{queryParams:this.Quiz})
      }
    })
  }
}
