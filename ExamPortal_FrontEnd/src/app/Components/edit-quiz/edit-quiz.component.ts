import { Component , OnInit,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.css']
})
export class EditQuizComponent implements OnInit{
  editQuizForm!:FormGroup;
  Quiz:any
  categories:any
    constructor(private fb: FormBuilder, private quizService: QuizService, private Snack: MatSnackBar,private dialogRef:MatDialogRef<EditQuizComponent>,@Inject (MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService){
      this.editQuizForm=this.fb.group({
      id:['',[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      title:['',[Validators.required]],
      description: ['',[Validators.required]],
      max_marks:['',[Validators.required]],
      number_of_questions:['',Validators.required],
      cat_id:['',[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      isActive:['']
      })
    }
  ngOnInit(): void {
   this.getQuizById();
   this.getCategories();
  }
  getCategories()
  {
    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categories=res;
    })
  }
  getQuizById()
  {
    return this.quizService.getQuiz(this.data).subscribe({
      next:(res)=>{
       
        
        this.Quiz=res;
       console.log(res)
       this.editQuizForm.patchValue(this.Quiz)
        
      },
      error:(err)=>{
        this.Snack.open("Error in geting Quiz!",'',{
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
  editQuiz()
  {
    console.log(this.editQuizForm.value)
    this.quizService.updateQuiz(this.editQuizForm.value).subscribe(
      {
        next:(res:any)=>{
          this.Snack.open("Quiz Updated Succesfully!",'',{
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
