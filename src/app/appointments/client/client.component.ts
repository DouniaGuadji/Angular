import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true, // Indique que ce composant est autonome
  imports: [CommonModule, RouterModule], // Modules nécessaires
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {}
