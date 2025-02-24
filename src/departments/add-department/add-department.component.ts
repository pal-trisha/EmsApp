import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../department';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  dept :Department={id:0,name:''}

  constructor(private departmentService:DepartmentService,private router :Router)
  {}

  addDepartment()
  {
    this.departmentService.add(this.dept).subscribe(d=>{alert('Department added successfully');
      this.router.navigate(['/departments']);
      //navigate through list
    }, err=>{alert('Error');
      console.log(err);
    })
  }
}