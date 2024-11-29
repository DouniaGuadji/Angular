import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importez le composant standalone

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, // Utilisez directement le composant standalone
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
