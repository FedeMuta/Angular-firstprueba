import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /* servicio para el inicio de sesión */
  constructor(private http: HttpClient) {}

  private userId: number | null = null; /* id de usuario */

  public login(email: string, password: string) {
    const loginData = {
      usuario: email,
      password: password,
    };

    return this.http
      .post('https://backend-portfolio-x6j6.onrender.com/login', loginData)
      .toPromise()
      .then((response: any) => {
        if (response && response.token) {
          localStorage.setItem('isLoggedIn', 'true'); /* guarda en el localStorage el item isLoggedIn con valor true */
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
