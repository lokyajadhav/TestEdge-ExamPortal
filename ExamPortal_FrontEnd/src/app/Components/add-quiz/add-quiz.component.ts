import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { QuizService } from 'src/app/Services/Quiz/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  addQuizForm!: FormGroup
  quizzes:any;
  
  categories:any
  constructor(private fb: FormBuilder, private categoryService: CategoryService, private diaRef: MatDialogRef<AddQuizComponent>, private quizSevice: QuizService,private Snack: MatSnackBar){

  }
  ngOnInit(): void {
    this.getCategories();
    this.addQuizForm=this.fb.group({
      id:['',[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      title:['',[Validators.required]],
      description: ['',[Validators.required]],
      max_marks:['',[Validators.required]],
      number_of_questions:['',Validators.required],
      cat_id:['',[Validators.required]],
      isActive:[false]
     
    })
  
  }
  getCategories()
  {
    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categories=res;
    })
  }
  addQuiz()
  {
    console.log(this.addQuizForm.value)
    this.quizSevice.addQuiz(this.addQuizForm.value).subscribe({
      next:(res)=>{
        
        Swal.fire("Success","Quiz Successfully Added",'success')
        this.quizSevice.isCategoryAdded.emit(
          "sdfsdf"
         
  
        )
       
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
