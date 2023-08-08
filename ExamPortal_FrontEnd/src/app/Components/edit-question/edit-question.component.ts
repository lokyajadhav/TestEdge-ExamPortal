import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent  implements OnInit{
  editQuestionForm!:FormGroup;
  Question:any
  Quizzes:any
  public Editor = ClassicEditor;
    constructor(private fb: FormBuilder, private quizService: QuizService, private Snack: MatSnackBar,private dialogRef:MatDialogRef<EditQuestionComponent>,@Inject (MAT_DIALOG_DATA) public data: any, private questionService: QuestionService){
      this.editQuestionForm=this.fb.group({
        id:['',[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
        content:['',[Validators.required]],
        correct_answer: ['',[Validators.required]],
        option_A:['',[Validators.required]],
        option_B:['',[Validators.required]],
        option_D:['',[Validators.required]],
        option_C:['',[Validators.required]],
        quiz_id:['',],
      })
    }
  ngOnInit(): void {
   this.getQuestionById();
   this.getQuizzes();
  }
  getQuizzes()
  {
    this.quizService.getAllQuizzes().subscribe((res)=>{
      this.Quizzes=res;
    })
  }
  getQuestionById()
  {
    return this.questionService.getQuestion(this.data).subscribe({
      next:(res)=>{
       
        
        this.Question=res;
       console.log(res)
       this.editQuestionForm.patchValue(this.Question)
        
      },
      error:(err)=>{
        this.Snack.open("Error in geting Question!",'',{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition:'right'
         })
      }
    })
  }
  close()
  {
    this.dialogRef.close();
  }
  editQuestion()
  {
    console.log(this.editQuestionForm.value)
    this.questionService.updateQuestion(this.editQuestionForm.value).subscribe(
      {
        next:(res:any)=>{
          this.Snack.open("Question Updated Succesfully!",'',{
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'right'
           })
           this.dialogRef.close();
           //this.getAllCategories();
        },
        error:(err:any)=>
        {
          this.Snack.open(err,'',{
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'right'
           })
        }
      })
    }
}
