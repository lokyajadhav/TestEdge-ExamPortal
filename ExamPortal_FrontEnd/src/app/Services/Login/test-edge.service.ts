import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestEdgeService {

  constructor(private http: HttpClient) { }
  requestHeader=new   HttpHeaders({"No-Auth": "True"})

  login(loginData: any)
  {
  return   this.http.post("http://localhost:8080/authenticate", loginData,{headers:this.requestHeader});
  }
  register(registerData: any)
  {
   return  this.http.post("http://localhost:8080/register", registerData,{headers:this.requestHeader})
  }
  
}
