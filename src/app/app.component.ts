import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <button routerLink="/users">Gestion des Utilisateurs</button>
      <button routerLink="/appointments">Gestion des Rendez-vous</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        margin: 20px;
      }
      button {
        margin-right: 10px;
        padding: 10px;
        background-color: blue;
        color: white;
        border: none;
        border-radius: 5px;
      }
    `,
  ],
})
export class AppComponent {}
