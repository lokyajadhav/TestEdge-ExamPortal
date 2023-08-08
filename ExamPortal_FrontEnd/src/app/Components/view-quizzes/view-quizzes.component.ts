import { Component , OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import { AddQuizComponent } from '../add-quiz/add-quiz.component';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { EditQuizComponent } from '../edit-quiz/edit-quiz.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  
  quizzes: any
  words=60
  index=0
  seeMore!:boolean
  
 
  
  change()
  {
    this.seeMore=!this.seeMore;
    if(this.seeMore)
    {
      this.index=2
    }
    else
    {
      this.index=0
    }
    console.log("index"+ this.index)
  }
  constructor(private quizService: QuizService,private Snack:MatSnackBar, private dialog: MatDialog, private fb: FormBuilder){
    this.seeMore=false
   
  }
  ngOnInit(): void {
    
    this.getAllQuizzes();
    this.quizService.isCategoryAdded.subscribe((res)=>{
      this.getAllQuizzes();
    })
    
  }
  getAllQuizzes()
  {
    return this.quizService.getAllQuizzes().subscribe({
      next:(data)=>{
       
        
          this.quizzes=data;
         
       // console.log(this.categories)
        
      },
      error:(err)=>{
        this.Snack.open("Error in geting quizzes!",'',{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition:'right'
         })
      }
    })
  }
  addQuizFormOpen()
  {
    const dialogRef= this.dialog.open(AddQuizComponent,{
      width:'50%'
    })
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllQuizzes(); 
         });
  }
  deleteQuizOpen(QuizId:any)
  {
    const dialogRef: MatDialogRef<DeleteConfirmComponent>= this.dialog.open(DeleteConfirmComponent,{
      data:{id:QuizId,type:2},
      width:'30%'
    })
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllQuizzes();
    });
  }
  openEditBox(QuizId:any)
  {
    const dialogRef: MatDialogRef<EditQuizComponent> =  this.dialog.open(EditQuizComponent, {
    data:QuizId,
      width:'70%'
      
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllQuizzes();
    });
  }
  onSlideToggleChange(quiz: any) {
    // Here, you can handle the event when the slide toggle is changed.
    // For example, you can call a function to deactivate the quiz.
    quiz.isActive=!quiz.isActive
    
    this.quizService.updateQuiz(quiz).subscribe(res=>{
      this.getAllQuizzes();
    })
  }

  
 

}
