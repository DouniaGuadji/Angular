import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { UsersComponent } from './app/users/users.component';
import { AvailabilitiesComponent } from './app/availability/availability.module';
import { AppointmentsComponent } from './app/appointments/appointments.component';

const routes = [
  { path: 'users', component: UsersComponent },
  { path: 'availabilities', component: AvailabilitiesComponent },
  { path: 'appointments', component: AppointmentsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
