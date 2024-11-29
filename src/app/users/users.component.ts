import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Liste des Utilisateurs</h2>
    <form (ngSubmit)="addUser()">
      <label for="username">Nom d'utilisateur :</label>
      <input id="username" type="text" [(ngModel)]="newUser.username" name="username" required />

      <label for="email">Email :</label>
      <input id="email" type="email" [(ngModel)]="newUser.email" name="email" required />

      <button type="submit">Ajouter</button>
    </form>
    <ul>
      <li *ngFor="let user of users">
        {{ user.username }} - {{ user.email }}
        <button (click)="removeUser(user)">Supprimer</button>
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
export class UsersComponent {
  users = [
    { username: 'Alice', email: 'alice@example.com' },
    { username: 'Bob', email: 'bob@example.com' },
  ];

  newUser = { username: '', email: '' };

  addUser() {
    if (this.newUser.username && this.newUser.email) {
      this.users.push({ ...this.newUser });
      this.newUser = { username: '', email: '' };
    }
  }

  removeUser(user: any) {
    this.users = this.users.filter(u => u !== user);
  }
}
