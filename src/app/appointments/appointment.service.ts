import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService { // Vérifiez bien le nom ici
  private baseUrl = 'http://localhost:3000/api/appointments';

  constructor(private http: HttpClient) {}

  getAvailableAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/available`);
  }

  reserveAppointment(appointmentId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reserve`, { appointmentId });
  }

  getProfessionalAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/professional`);
  }

  confirmAppointment(appointmentId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/confirm`, { appointmentId });
  }

  cancelAppointment(appointmentId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/cancel`, { appointmentId });
  }
}
