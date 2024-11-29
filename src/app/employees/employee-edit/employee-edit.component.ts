import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent {
  employee = { id: 1, nom: 'Ahmed', prenom: 'Mohamed', email: 'ahmed.mohamed@email.com' };

  onSubmit() {
    console.log('Employee updated:', this.employee);
  }
}
