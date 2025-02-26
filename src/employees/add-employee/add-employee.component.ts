import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../../departments/department.service';
import { Department } from '../../departments/department';
 
 
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  emp:Employee={id:0,name:'',dateOfJoining:new Date(),email:'',mobileNo:0,deptId:0,salary:0,gender:''};
  list:Department[]=[];
  constructor(private empService:EmployeeService, private router:Router, private deptService:DepartmentService)
  { }
ngOnInit():void{
  this.deptService.getList().subscribe(d=>{
    this.list=d;
    console.log(d);
  })
}
  addEmployee(){
    this.empService.add(this.emp).subscribe(d=>{
      alert('Employee added successfully');
      this.router.navigate(['/employee'])
      //navigate to list
    },err=>{
      alert('Error');
      console.log(err)
    })
  }
 
}