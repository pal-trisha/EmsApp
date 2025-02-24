import { Component } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-department',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-department.component.html',
  styleUrl: './list-department.component.css'
})
export class ListDepartmentComponent {
  //define department array
  list: Department[]=[];
  
  constructor(private deptService:DepartmentService){ 
  }

  ngOnInit()
  {
     this.deptService.getList().subscribe(data=>{
      this.list = data;
      console.log(data);
    })
  }
}
