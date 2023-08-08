import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestEdgeAuthService } from 'src/app/Services/Auth_Handler/test-edge-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private authService: TestEdgeAuthService, private router: Router){
    setTimeout(() => {
      this.authService.clear();
      router.navigate(["/home"])
      console.log("logout test");
    }, 5000*1000);
  }
}
