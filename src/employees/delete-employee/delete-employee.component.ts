import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent {

  list:Employee[]=[];

  constructor(private empService:EmployeeService)
  {}

  ngOnInit()
  {
    this.empService.getList().subscribe(data=>{this.list=data;
      console.log(data);
    },
    err=>{alert("error");});
  }
  
  delete(id:number){
    this.empService.delete(id).subscribe(d=>{
      alert("Deleted successfully");
    },err=>{
      console.log(err);
      alert("error");
    });
  }
}
