import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit{
  quizResult:any;
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.quizResult=params
      console.log(this.quizResult.isCleared)
    })
    
  }

}
