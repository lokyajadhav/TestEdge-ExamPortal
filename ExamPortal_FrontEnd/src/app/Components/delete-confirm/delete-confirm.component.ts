import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent {

constructor(private questionService: QuestionService,private categoryService: CategoryService, private quizServeice: QuizService ,@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DeleteConfirmComponent>){

}
  delete(){
    if(this.data.type ==1)
    {
    return this.categoryService.deleteCategory(this.data.id).subscribe({
      next:(res)=>{
        
        Swal.fire("Deleted!","Category deleted Succesfully",'success')
        this.dialogRef.close();


      },
      error:(err)=>
      {
        Swal.fire("Oops!","something went wrong!",'error')
      }
    })
  }
  else if(this.data.type == 2)
  {
    return this.quizServeice.deleteQuiz(this.data.id).subscribe({
      next:(res)=>{
        
        Swal.fire("Deleted!","Quiz deleted Succesfully",'success')
        this.dialogRef.close();


      },
      error:(err)=>
      {
        Swal.fire("Oops!","something went wrong!",'error')
      }
    })
  }
  else
  {
    return this.questionService.deleteQuestion(this.data.id).subscribe({
      next:(res)=>{
        
        Swal.fire("Deleted!","Question deleted Succesfully",'success')
        this.dialogRef.close();


      },
      error:(err)=>
      {
        Swal.fire("Oops!","something went wrong!",'error')
      }
    })
    
  }
}
close()
{
  this.dialogRef.close();
}
}
