import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TestEdgeAuthService } from 'src/app/Services/Auth_Handler/test-edge-auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog, private testEdgeAuth: TestEdgeAuthService, private router: Router){}
  openLoginForm()
  {
    const dialogRef = this.dialog.open(LoginComponent,{
      width:'34%'
      
    });
  }
  isLoggedIn()
  {
    return this.testEdgeAuth.isLoggedIn();
  }
  logout()
  {
    this.testEdgeAuth.clear();
    Swal.fire("Success","User Successfully Logged Out !",'success')
    this.router.navigate(['/home']);
  }
}
