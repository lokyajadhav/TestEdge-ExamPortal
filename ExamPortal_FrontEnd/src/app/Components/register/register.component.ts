import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

import Swal from "sweetalert2"
import { TestEdgeService } from 'src/app/Services/Login/test-edge.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
   constructor(private fb: FormBuilder, private registerRef: MatDialogRef<RegisterComponent>, private dialog: MatDialog, private testService: TestEdgeService){}
   registerForm!:FormGroup;
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      username:['',[Validators.required,Validators.minLength(8),]],
      firstname:['',[Validators.required]],
      lastname:['',Validators.required],
      email:['',[Validators.email, Validators.required]],
  
      about:[''],
      
      mobile:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
    
  
  }
  Register(){
    this.testService.register(this.registerForm.value).subscribe({
      next:(data)=>{
        console.log(data);
        this.registerRef.close();
        this.registerForm.reset();
        Swal.fire("Success","User Registered Successfully", 'success');
        
      },
      error:(res)=>
      {
        alert("something went wrong");

      }
      
      
    })
  }
  onClose()
  {
    this.registerRef.close();
    this.dialog.open(LoginComponent,{
      width:'34%'
      
    });
  }
  reset()
  {
    this.registerForm.reset();
    
  }

}
