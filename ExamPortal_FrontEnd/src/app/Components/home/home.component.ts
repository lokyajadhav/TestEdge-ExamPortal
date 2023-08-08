import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private dialog: MatDialog){

}
  openLoginForm()
  {
    const dialogRef = this.dialog.open(LoginComponent,{
      width:'34%'
      
    });
  }
}
