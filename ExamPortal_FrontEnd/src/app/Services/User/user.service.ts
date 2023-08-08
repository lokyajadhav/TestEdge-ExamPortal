import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUser(username: any)
  {
    return this.http.get(`http://localhost:8080/getUser/${username}`);
  }
  updateUser(userData:any)
  {
    return this.http.post("http://localhost:8080/updateUser",userData);
  }
}
