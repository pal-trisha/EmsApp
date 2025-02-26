import { Component } from '@angular/core';
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
list: Employee[]=[];
 constructor(private empService: EmployeeService)
 {
 
 }
 ngOnInit()
 {
 
 this.getList();
 }
 getList(){
  this.empService.getList().subscribe(d=>
  {
    this.list=d;
    console.log(this.list);
  },err=>{
    console.log(err);
    alert('Error');
  }
  );
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