import { Component ,Inject,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/Category/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm!:FormGroup;
  categories:any

    constructor(private fb: FormBuilder, private categoryService: CategoryService, private Snack: MatSnackBar,private dialogRef:MatDialogRef<EditCategoryComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
      this.editCategoryForm=this.fb.group({
        id:['',[Validators.required,Validators.maxLength(10), Validators.minLength(10)]],
        title:['',[Validators.required]],
        description: ['',[Validators.required]]
      })
    }
  ngOnInit(): void {
   this.getAllCategories();
  }
  getAllCategories()
  {
    return this.categoryService.getCategory(this.data).subscribe({
      next:(res)=>{
       
        
        this.categories=res;
       console.log(this.categories)
       this.editCategoryForm.patchValue(this.categories)
        
      },
      error:(err)=>{
        this.Snack.open("Error in geting categories!",'',{
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
  editCategory()
  {
    this.categoryService.updateCategory(this.editCategoryForm.value).subscribe(
      {
        next:(res:any)=>{
          this.Snack.open("User Updated Succesfully!",'',{
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'right'
           })
           this.dialogRef.close();
           
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
