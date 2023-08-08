import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/Category/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit{
  addCategoryForm!: FormGroup
  categories:any;
  constructor(private fb: FormBuilder, private diaRef: MatDialogRef<AddCategoriesComponent>, private categorySevice: CategoryService,private Snack: MatSnackBar){

  }
  ngOnInit(): void {
    this.addCategoryForm=this.fb.group({
      id:['',[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
      title:['',[Validators.required]],
      description: ['',[Validators.required]]
    })
  
  }
  addCategory()
  {
    this.categorySevice.addCategory(this.addCategoryForm.value).subscribe({
      next:(res)=>{
        
        Swal.fire("Success","Category Added",'success')
        this.categorySevice.isCategoryAdded.emit(
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
