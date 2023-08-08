import { Dialog } from '@angular/cdk/dialog';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { TestEdgeService } from 'src/app/Services/Login/test-edge.service';
import { TestEdgeAuthService } from 'src/app/Services/Auth_Handler/test-edge-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  loginForm!: FormGroup;
  constructor(private snak: MatSnackBar, private fb: FormBuilder, private logRef: MatDialogRef<LoginComponent>, private dialog: MatDialog, private testEdgeService: TestEdgeService, private authService: TestEdgeAuthService, private router:Router){
   
  }
  ngOnInit(): void {
    
    this.loginForm=this.fb.group({
      username:['',[Validators.required, Validators.minLength(5)]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
  }
  Login()
  {
    this.testEdgeService.login(this.loginForm.value).subscribe(
      {
       next:(data:any)=>{
         console.log(data);
         this.authService.setRole(data.user.role);
         this.authService.setToken(data.jwtToken);
         this.authService.setUser(data.user.username);
         this.loginForm.reset();
         this.logRef.close();
         this.snak.open("Login Successfull!",'',{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition:'right'
         })
         if(this.authService.getRole() ==="ADMIN")
         {
          
          this.router.navigate(['/adminDashboard']);
         }
         else
         {
          const categoryID={categoryID:'allQuizzes'}
          this.router.navigate(['/userDashboard'],{queryParams:categoryID});
         }
       },
       error:()=>
       {
        Swal.fire("Invalid Credintials!!", " Please Check Username and Password", 'error')
        

       }
      }
     )

  }
  onClose()
  {
    this.logRef.close();
    this.dialog.open(RegisterComponent,{
      width:'37%'
      
    });
  }
  close()
  {
    this.logRef.close();
  }

}
