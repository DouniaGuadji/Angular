import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: string = ''; // Seule la propriété username reste

  onRegister(): void {
    console.log('Création d\'un compte avec :', this.username);
    // Appelez ici le service d'inscription si nécessaire
  }
}
