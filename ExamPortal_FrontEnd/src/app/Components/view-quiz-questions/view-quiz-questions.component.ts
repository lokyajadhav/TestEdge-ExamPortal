import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question/question.service';
import Swal from 'sweetalert2';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditQuestionComponent } from '../edit-question/edit-question.component';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  quizTitle!:any
  quizId!:any
  QuizQuestions:any
  constructor(private act_route: ActivatedRoute, private questionService: QuestionService, private dialog: MatDialog){
    
  }

  ngOnInit(): void {
    this.act_route.queryParamMap.subscribe(params=>{
      this.quizId=params.get('id')
      this.quizTitle=params.get('title')
    })
    this.getQuizQuestions();
   
  }
  getQuizQuestions()
  {
    this.questionService.getQuizQuestions(this.quizId).subscribe({
      next:(res)=>{
        this.QuizQuestions=res
      },
      error:(err)=>{
        Swal.fire("Error",'Error while getting Quiz Questions','error')
      }
    })
  }
  deleteQuestionOpen(QuizId:any)
  {
    const dialogRef: MatDialogRef<DeleteConfirmComponent>= this.dialog.open(DeleteConfirmComponent,{
      data:{id:QuizId,type:3},
      width:'30%'
    })
    dialogRef.afterClosed().subscribe((result) => {
      this.getQuizQuestions();
    });
  }
  openEditBox(QuestionId:any)
  {
    const dialogRef: MatDialogRef<EditQuestionComponent> =  this.dialog.open(EditQuestionComponent, {
    data:QuestionId,
      width:'70%'
      
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getQuizQuestions()
    });
  }
  addQuestionFormOpen()
  {
    const dialogRef= this.dialog.open(AddQuestionComponent,{
      data:this.quizId,
      width:'50%'
    })
    dialogRef.afterClosed().subscribe((result) => {
      this.getQuizQuestions(); 
         });
  }

}
