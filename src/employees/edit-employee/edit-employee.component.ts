import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {

  emp:Employee ={id:0,name:'',deptId :0,email:'',mobileNo: 0,dateOfJoining:new Date()};
  
  constructor(private empService:EmployeeService, private router :Router, private route:ActivatedRoute)
  {}

  ngOnInit()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id)
      {
        this.empService.getById(id).subscribe(data=>{this.emp = data;
          console.log(data);
        },
        err=>{console.error("Error fetching department",err);
        alert('Error');
      })}
  }

  editEmployee()
  {
    this.empService.edit(this.emp).subscribe(()=>{alert("Employee edited successfully");
      this.router.navigate(['/employees']);},
    err=>alert("Error"))
  }

}
