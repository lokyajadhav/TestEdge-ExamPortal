import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  isCategoryAdded =new EventEmitter()
  constructor(private http: HttpClient) { }
  getAllCategories()
  {
    return this.http.get(`http://localhost:8080/category/getAllCategories`);
  }
  addCategory(categoryData:any)
  {
    return this.http.post(`http://localhost:8080/category/addCategory`,categoryData);
  }
  deleteCategory(categoryId: any)
  {
    return this.http.delete(`http://localhost:8080/category/deleteCategory/${categoryId}`);

  }
  updateCategory(categoryData:any)
  {
    return this.http.post(`http://localhost:8080/category/updateCategory`,categoryData);
  }
  getCategory(categoryId: any)
  {
    return this.http.get(`http://localhost:8080/category/getCategory/${categoryId}`);

  }
}
