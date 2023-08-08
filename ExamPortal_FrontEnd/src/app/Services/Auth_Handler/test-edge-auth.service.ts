import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestEdgeAuthService {

  constructor() { }

  setRole(role:any)
  {
    localStorage.setItem("role",role);
  }
  getRole()
  {
   return  localStorage.getItem("role")
  }
  setToken(token:any)
  {
    localStorage.setItem("token",token);
  }
  getToken()
  {
    return localStorage.getItem("token")
  }
  isLoggedIn()
  {
    return this.getRole() && this.getToken();
  }
  clear()
  {
    localStorage.clear();
  }
  setUser(user: any)
  {
    localStorage.setItem("user",user);
    
  }
  getUser()
  {
   
    return localStorage.getItem("user")
  }
}
