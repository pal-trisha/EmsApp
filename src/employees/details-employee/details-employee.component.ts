import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-details-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-employee.component.html',
  styleUrl: './details-employee.component.css',
})
export class DetailsEmployeeComponent {
  @Input() employee! : Employee;
}
