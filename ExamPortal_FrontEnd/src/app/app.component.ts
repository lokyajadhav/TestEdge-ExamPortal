import { Component } from '@angular/core';
import { TestEdgeAuthService } from './Services/Auth_Handler/test-edge-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamPortal_FrontEnd';
  constructor(private authService: TestEdgeAuthService){
    
  }
}
