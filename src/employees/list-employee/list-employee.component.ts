import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

 list : Employee[]=[];

 constructor(private empService:EmployeeService)
 {}

 ngOnInit()
 {
    this.empService.getList().subscribe(data => {
    this.list=data;
    console.log(data);
  }    
  );
}
}
