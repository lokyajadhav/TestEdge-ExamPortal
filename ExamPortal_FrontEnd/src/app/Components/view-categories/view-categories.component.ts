import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { AddCategoriesComponent } from '../add-categories/add-categories.component';
import Swal from 'sweetalert2';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { Dialog } from '@angular/cdk/dialog';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit{
 
    categories: any
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
    constructor(private categoryService: CategoryService,private Snack:MatSnackBar, private dialog: MatDialog){
      this.seeMore=false
    }
    ngOnInit(): void {
      
      this.getAllCategories();
      this.categoryService.isCategoryAdded.subscribe((res)=>{
        this.getAllCategories();
      })
    }
    getAllCategories()
    {
      return this.categoryService.getAllCategories().subscribe({
        next:(data)=>{
         
          
            this.categories=data;
         // console.log(this.categories)
          
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
    addCategoryFormOpen()
    {
      const dialogRef= this.dialog.open(AddCategoriesComponent,{
        width:'50%'
      })
      dialogRef.afterClosed().subscribe((result) => {
        this.getAllCategories(); 
           });
    }
    deleteCategoryOpen(categoryId:any)
    {
      const dialogRef: MatDialogRef<DeleteConfirmComponent>= this.dialog.open(DeleteConfirmComponent,{
        data:categoryId,
        width:'30%'
      })
      dialogRef.afterClosed().subscribe((result) => {
        this.getAllCategories();
      });
    }
    openEditBox(categoryId:any)
    {
      const dialogRef: MatDialogRef<EditCategoryComponent> =  this.dialog.open(EditCategoryComponent, {
      data:categoryId,
        width:'70%'
        
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.getAllCategories();
      });
    }
    
}
