import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestEdgeAuthService } from 'src/app/Services/Auth_Handler/test-edge-auth.service';
import { TestEdgeService } from 'src/app/Services/Login/test-edge.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/User/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

 
  editProfileForm!:FormGroup
  constructor(private authService: TestEdgeAuthService, private testEdgeService: UserService, private route: ActivatedRoute, private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any, private editformRef: MatDialogRef<EditProfileComponent>, private snack: MatSnackBar){
    
    
    
      this.editProfileForm=this.fb.group({
        username:[''],
        firstname:['',[Validators.required]],
        lastname:['',Validators.required],
        email:['',[Validators.email]],
    
        about:[''],
        
        mobile:['',[Validators.minLength(10), Validators.maxLength(10)]],
      })
      
    
  }
  user:any;


ngOnInit(): void {
  
  
  
  
    this.getUser ()
    

    
    
    
  
 

 

}



getUser()
{
  this.testEdgeService.getUser(this.authService.getUser()).subscribe(
    {
      next:(data:any)=>{
        this.user=data;
        
        
    
      
      
      this.editProfileForm.patchValue(this.user)
    
    
        
        
        
      },
      error:()=>{
        alert("something went wrong");
      }
    }
  );
}
  
  updatePofile()
  {
    console.log(this.editProfileForm.value)
    this.testEdgeService.updateUser(this.editProfileForm.value).subscribe(
      {
        next:(res:any)=>{
          this.snack.open("User Updated Succesfully!",'',{
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'right'
           })
           this.editformRef.close();
           this.getUser();
        },
        error:(err:any)=>
        {
          this.snack.open(err,'',{
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'right'
           })
        }
      }
    )

  }
  close()
  {
    this.editformRef.close();
  }
}
