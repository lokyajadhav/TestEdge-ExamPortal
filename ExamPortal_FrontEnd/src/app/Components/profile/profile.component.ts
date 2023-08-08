import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TestEdgeAuthService } from 'src/app/Services/Auth_Handler/test-edge-auth.service';
import { TestEdgeService } from 'src/app/Services/Login/test-edge.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { UserService } from 'src/app/Services/User/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    constructor(private authService: TestEdgeAuthService, private testEdgeService: UserService,private dialog: MatDialog, private location: Location){
      
    }
    user:any;
    profile="profile";
    about="about";
  ngOnInit(): void {
    this.getUser();
    
  }

    
    getUser()
    {
      return this.testEdgeService.getUser(this.authService.getUser()).subscribe(
        {
          next:(data:any)=>{
            this.user=data;
            console.log(this.user)
            
          },
          error:()=>{
            alert("something went wrong");
          }
        }
      );
      
    }
    openEditBox(data:any)
    {
      const dialogRef: MatDialogRef<EditProfileComponent> =  this.dialog.open(EditProfileComponent, {
        data: data,
        width:'70%'
        
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.getUser();
      });
    }
    goBack(): void
    {
      this.location.back();
    }

}

