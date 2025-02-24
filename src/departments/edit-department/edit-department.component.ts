import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-department',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent {

  dept :Department={id:0,name:''}
  constructor(private departmentService :DepartmentService,private router :Router , private route:ActivatedRoute){}

  ngOnInit()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id)
    {
      this.departmentService.getById(id).subscribe(data=>{this.dept = data;
        console.log(data);
      },
      err=>{console.error("Error fetching department",err);
      alert('Error');
    })}
  }

  editDepartment()
  {
    this.departmentService.edit(this.dept).subscribe(()=>{alert("Department edited successfully");
      this.router.navigate(['/departments']);},
    err=>alert("Error"))
  }
}
