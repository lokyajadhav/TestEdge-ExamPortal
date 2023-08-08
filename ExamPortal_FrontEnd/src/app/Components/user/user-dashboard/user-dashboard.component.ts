import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestEdgeAuthService } from 'src/app/Services/Auth_Handler/test-edge-auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  constructor(private authService: TestEdgeAuthService, private router: Router){
    setTimeout(() => {
      this.authService.clear();
      router.navigate(["/home"])
      console.log("logout test");
    }, 500000);
  }
}
