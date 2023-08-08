import { LocationStrategy } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { QuestionService } from 'src/app/Services/Question/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
Quiz:any
Questions:any
TotalTimer:any;
Timer:any;
constructor(private locationST: LocationStrategy, private router: ActivatedRoute, private questionsService: QuestionService, private route: Router){

}
  ngOnInit(): void {
    this.router.queryParams.subscribe(params=>{
      this.Quiz=params
      console.log("data")
      console.log(this.Quiz)
    })
    this.getUserQuizQuestions(this.Quiz.id)
   this.preventBackButton()
  }
preventBackButton(){
  history.pushState(null, location.href);
this.locationST.onPopState(()=>{
  history.pushState(null, location.href)
})
}
getUserQuizQuestions(QuizID:any)
{
  this.questionsService.getUserQuizQuestions(QuizID).subscribe({
    next:(res)=>{
      this.Questions=res;
      this.TotalTimer=this.Questions?.length*60;
      this.Timer=this.TotalTimer;
      console.log(this.Questions)
      this.StartTimer();
    },
    error:(err)=>{
      Swal.fire("Error!","error while loading Quiz Questions",'error')
    }
  })
}
SubmitQuiz()
{
  Swal.fire({
    title:'Do you want to submit the quiz?',
    showCancelButton: true,
    confirmButtonText:'Submit',
    icon:'info'
  }).then((result)=>{
    if(result.isConfirmed)
    {
     this.evaluateQuiz();
    }
  })
}
evaluateQuiz()
{
  this.questionsService.EvaluateQuiz(this.Questions).subscribe({
    next:(res)=>{
        console.log(res)
        this.route.navigate(['/quizResult'],{queryParams:res})

    },
    error:(err)=>{
      Swal.fire("Error!",'error while getting quiz result responce!','error')
    }
   });
}
StartTimer()
{
  let t:any = window.setInterval(()=>{
    if(this.Timer<=0)
    {
     this.evaluateQuiz();
      clearInterval(t);
    }else{
      this.Timer--;
    }
  }, 1000)
}
getTimeFormat()
{
  let hh=Math.floor(this.Timer/3600);
  let mm= Math.floor((this.Timer-hh*3600)/60);
  let ss= (this.Timer-mm*60);
  return `${hh} hrs: ${mm} min: ${ss} sec`;
}

}
