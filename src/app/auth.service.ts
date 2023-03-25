import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'https://localhost:4200/api';
  token;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    this.http
      .post(this.api + '/authenticate', { email: email, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(['profile']);
        localStorage.setItem('token', resp.token);
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get logIn() {
    return localStorage.getItem('token') !== null;
  }
}