import { Component ,OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/app/Services/Question/question.service';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  addQuestionForm!: FormGroup
  public Editor = ClassicEditor;
  
  Quizzes:any
  constructor(@Inject (MAT_DIALOG_DATA) public quizId: any,private fb: FormBuilder, private questionService: QuestionService, private diaRef: MatDialogRef<AddQuestionComponent>, private quizSevice: QuizService,private Snack: MatSnackBar){

  }
  ngOnInit(): void {
    this.getQuizzes();
    this.addQuestionForm=this.fb.group({
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
  getQuizzes()
  {
    this.quizSevice.getAllQuizzes().subscribe((res)=>{
      this.Quizzes=res;
    })
  }
  addQuestion()
  {
    console.log(this.addQuestionForm.value)
    this.addQuestionForm.get('quiz_id')?.patchValue(this.quizId)
    this.questionService.addQuestion(this.addQuestionForm.value).subscribe({
      next:(res)=>{
        
        Swal.fire("Success","Question Successfully Added",'success')
        
       
        this.close()
      },
      error: (err)=>
      {
        Swal.fire(err,"please check the entered details!",'error')
      }
    })
  }
  
  
  close()
  {
    this.diaRef.close()
  }

}
