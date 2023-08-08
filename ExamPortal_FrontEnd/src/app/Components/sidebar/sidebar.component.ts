import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCategoriesComponent } from '../add-categories/add-categories.component';
import { Router } from '@angular/router';
import { AddQuizComponent } from '../add-quiz/add-quiz.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 
  
  constructor(private dialog: MatDialog, private router: Router){

  }
  addCategoryFormOpen()
  {
   const catRef: MatDialogRef<AddCategoriesComponent>= this.dialog.open(AddCategoriesComponent, {
    
      width:'50%'
      
    });
    
  }
  addQuizFormOpen()
  {
   const catRef: MatDialogRef<AddQuizComponent>= this.dialog.open(AddQuizComponent, {
    
      width:'50%'
      
    });
    
  }
}
