import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/users">Utilisateurs</a></li>
        <li><a routerLink="/appointments">Rendez-vous</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        gap: 10px;
      }
      nav ul li {
        display: inline;
      }
      nav ul li a {
        text-decoration: none;
        color: blue;
      }
    `,
  ],
})
export class AppComponent {}
