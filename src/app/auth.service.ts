import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService { /* servicio para simular el inicio de sesión */
  constructor() {}

  private userId = 1; /* id de usuario para simular el inicio de sesión */

  login(email: string, password: string): boolean {  /* método para simular el inicio de sesión */
    if (email === 'usuario' && password === 'password') { /* si el email y password son correctos, se guarda en el localStorage */
      localStorage.setItem('isLoggedIn', 'true'); 
      return true; 
    } else { 
      return false; 
    }
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn'); /* elimina el item isLoggedIn del localStorage */
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true'; /* devuelve true si el item isLoggedIn es igual a true */
  }

  getUserId(): number {
    if (!this.isLoggedIn()) { /* si no esta logueado, devuelve 1, el usuario por defecto. */
      return 1;
    }
    return this.userId; /* devuelve el id de usuario */
  }

}