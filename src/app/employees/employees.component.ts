import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  employees = [
    { id: 1, nom: 'Ahmed', prenom: 'Mohamed' },
    { id: 2, nom: 'Aicha', prenom: 'Fatima' },
  ];
}
