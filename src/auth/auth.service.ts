import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = ' http://localhost:3000/users';

  constructor(private client: HttpClient, private route: Router) {}

  register(user: any): Observable<any> {
    return this.client.post(this.apiUrl, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.client
      .get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(
        tap((users) => {
          if (users.length) {
            sessionStorage.setItem('token', users[0].token);
            sessionStorage.setItem('user', JSON.stringify(users[0]));
          } else {
            alert('Login failed!');
          }
        })
      );
  }

  logout() {
    sessionStorage.clear();
    this.route.navigate(['login']);
  }
}
