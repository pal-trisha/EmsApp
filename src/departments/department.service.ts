import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private apiUrl ='http://localhost:3000/departments';

  constructor(private client : HttpClient) 
  {}

  getList(): Observable<Department[]>
  {
    let list = this.client.get<Department[]>(this.apiUrl);
    return list;
  }

  add(dept:Department):Observable<Department>
  {
    return this.client.post<Department>(this.apiUrl,dept);
  }
  
  edit(dept:Department):Observable<Department>
  {
    return this.client.put<Department>(`${this.apiUrl}/${dept.id}`,dept);
  }

  getById(id:number):Observable<Department>
  {
    let dept = this.client.get<Department>(`${this.apiUrl}/${id}`);
    return dept;
  }
  
}


