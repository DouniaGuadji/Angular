import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  imports: [FormsModule, CommonModule], // Importez FormsModule et CommonModule ici
})
export class ProfessionalComponent {
  appointments: any[] = []; // Déclarez cette propriété pour éviter des erreurs

  confirmAppointment(id: number): void {
    console.log(`Confirmer le rendez-vous avec ID : ${id}`);
  }

  cancelAppointment(id: number): void {
    console.log(`Annuler le rendez-vous avec ID : ${id}`);
  }
}
