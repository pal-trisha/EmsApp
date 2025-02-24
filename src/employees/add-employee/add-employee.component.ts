import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  emp:Employee ={id:0,name:'',deptId :0,email:'',mobileNo: 0,dateOfJoining:new Date()};

  constructor(private empService:EmployeeService, private router :Router)
  {}

  addEmployee()
  {
    this.empService.add(this.emp).subscribe(emp =>{alert("Employee Added Successfully");
      this.router.navigate(['/employees']);
    }
    ,
    err=>{alert("Error");
    console.log(err);
    })
  }

}
