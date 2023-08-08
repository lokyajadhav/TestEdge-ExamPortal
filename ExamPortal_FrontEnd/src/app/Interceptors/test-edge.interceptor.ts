import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestEdgeAuthService } from '../Services/Auth_Handler/test-edge-auth.service';

@Injectable()
export class TestEdgeInterceptor implements HttpInterceptor {

  constructor(private authService: TestEdgeAuthService, private router: Router, private snak: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.headers.get("No-Auth") ==="True")
    {
      return next.handle(request.clone())
    }
    const token  =this.authService.getToken();
    request= this.addToken(request,token);

    return next.handle(request).pipe(
      catchError(
        (err:HttpErrorResponse)=>{
          if(err.status == 401)
          {
            this.snak.open("Invalid credentials! Please check your username and password!",'',{
              duration:3000,
              verticalPosition:'top',
              horizontalPosition:'right'
             })
            this.router.navigate(['/home']);
          }
          else if(err.status==403)
          {
            this.snak.open("you are not allowed to perform this operation!",'',{
              duration:3000,
              verticalPosition:'top',
              horizontalPosition:'right'
             })
           
          }
          return throwError("something went wrong");
        }
      )
    )


  }

  private addToken(request:HttpRequest<any>, token: any)
  {
    return request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
  }
}
