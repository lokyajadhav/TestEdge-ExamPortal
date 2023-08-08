import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit{
  Categories:any
  constructor(private categoryService: CategoryService){

  }
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories()
  {
    this.categoryService.getAllCategories().subscribe({
      next:(res)=>{
        this.Categories=res;
      },
      error:(err)=>{
        Swal.fire("Error","error while getting all Categories!",'error')
      }
    })
  }
}
