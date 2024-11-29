import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-availabilities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Disponibilités des Professionnels</h2>
    <form (submit)="addAvailability()">
      <label for="date">Date :</label>
      <input id="date" type="date" [(ngModel)]="newAvailability.date" name="date" required />

      <label for="time">Heure :</label>
      <input id="time" type="time" [(ngModel)]="newAvailability.time" name="time" required />

      <button type="submit">Ajouter</button>
    </form>
    <ul>
      <li *ngFor="let availability of availabilities">
        {{ availability.date }} à {{ availability.time }}
        <button (click)="removeAvailability(availability)">Supprimer</button>
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
export class AvailabilitiesComponent {
  availabilities = [
    { date: '2024-12-01', time: '09:00' },
    { date: '2024-12-02', time: '14:00' },
  ];

  newAvailability = { date: '', time: '' };

  addAvailability() {
    if (this.newAvailability.date && this.newAvailability.time) {
      this.availabilities.push({ ...this.newAvailability });
      this.newAvailability = { date: '', time: '' };
    }
  }

  removeAvailability(availability: any) {
    this.availabilities = this.availabilities.filter(a => a !== availability);
  }
}
