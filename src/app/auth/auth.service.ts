import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string) {
    return this.http.post('/api/login', { username });
  }

  register(username: string) {
    return this.http.post('/api/register', { username });
  }
}
