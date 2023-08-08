import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { RegisterComponent } from 'src/app/Components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMeterialModule } from 'src/app/angular-meterial/angular-meterial.module';
import { AppModule } from 'src/app/app.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMeterialModule,
   

  ],
  
})
export class LoginModule { }
