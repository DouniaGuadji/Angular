import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Liste des Rendez-vous</h2>
    <form (ngSubmit)="addAppointment()">
      <label for="date">Date :</label>
      <input id="date" type="date" [(ngModel)]="newAppointment.date" name="date" required />

      <label for="description">Description :</label>
      <input id="description" type="text" [(ngModel)]="newAppointment.description" name="description" required />

      <button type="submit">Ajouter</button>
    </form>
    <ul>
      <li *ngFor="let appointment of appointments">
        {{ appointment.date }} - {{ appointment.description }}
        <button (click)="removeAppointment(appointment)">Supprimer</button>
      </li>
    </ul>
  `,
  styles: [
    `
      form {
        margin-bottom: 20px;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class AppointmentsComponent {
  appointments = [
    { date: '2024-12-01', description: 'Rendez-vous avec Alice' },
    { date: '2024-12-02', description: 'Rendez-vous avec Bob' },
  ];

  newAppointment = { date: '', description: '' };

  addAppointment() {
    if (this.newAppointment.date && this.newAppointment.description) {
      this.appointments.push({ ...this.newAppointment });
      this.newAppointment = { date: '', description: '' };
    }
  }

  removeAppointment(appointment: any) {
    this.appointments = this.appointments.filter(a => a !== appointment);
  }
}
