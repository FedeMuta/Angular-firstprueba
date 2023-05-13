import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /* servicio para simular el inicio de sesión */
  constructor(private http: HttpClient) {}

  usuarios = [
    {
      userId: 1,
      email: 'Fede',
      password: 'password',
    },
    {
      userId: 2,
      email: 'Agustina',
      password: 'passworD',
    },
  ]; /* array de usuarios */

  private userId: number | null = null; /* id de usuario */

  public login(email: string, password: string) {
    const loginData = {
      usuario: email,
      password: password,
    };

    return this.http
      .post('http://localhost:8080/login', loginData)
      .toPromise()
      .then((response: any) => {
        if (response && response.token) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userId', response.userId.toString());
          this.userId = response.userId;
          return true;
        }
        return false;
      })
      .catch((error) => {
        alert('Email o contraseña incorrectos');
        return false;
      });
  }

  logout(): void {
    localStorage.removeItem(
      'isLoggedIn'
    ); /* elimina el item isLoggedIn del localStorage */
  }

  isLoggedIn(): boolean {
    return (
      localStorage.getItem('isLoggedIn') === 'true'
    ); /* devuelve true si el item isLoggedIn es igual a true */
  }

  getUserId(): number {
    if (!this.isLoggedIn()) {
      /* si no esta logueado, devuelve 1, el usuario por defecto. */
      return 1;
    }
    if (this.userId === null) {
      /* si no hay id de usuario guardado, lo busca en el localStorage */
      const storedUserId = localStorage.getItem('userId');
      this.userId = storedUserId
        ? parseInt(storedUserId)
        : 1; /* si no hay id de usuario guardado, asigna 1 */
    }
    return this.userId; /* devuelve el id de usuario */
  }
}
