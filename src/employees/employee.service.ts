import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl='http://localhost:3000/employees';

  constructor(private client:HttpClient)
  {}

  getList():Observable<Employee[]>
  {
    let list = this.client.get<Employee[]>(this.apiUrl);
    return list;
  }

  add(emp:Employee):Observable<Employee>
  {
    return this.client.post<Employee>(this.apiUrl,emp);
  }

  getById(id:number):Observable<Employee>
  {
    let emp = this.client.get<Employee>(`${this.apiUrl}/${id}`);
    return emp;
  } 

  edit(emp:Employee):Observable<Employee>
    {
      return this.client.put<Employee>(`${this.apiUrl}/${emp.id}`,emp);
    }
}
