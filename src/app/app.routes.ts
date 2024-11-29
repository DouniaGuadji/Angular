import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AppointmentsComponent } from './appointments/appointments.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
