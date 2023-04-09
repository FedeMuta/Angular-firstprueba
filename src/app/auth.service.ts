import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService { /* servicio para simular el inicio de sesión */
  constructor() { }

  usuarios = [
    {
      userId: 1,
      email: "Fede",
      password: "password"
    },
    {
      userId: 2,
      email: "Agustina",
      password: "passworD"
    }
  ]; /* array de usuarios */

  private userId: number | null = null; /* id de usuario */

  login(email: string, password: string): boolean {  /* método para simular el inicio de sesión */
    for (let user of this.usuarios) {
      if (user.email === email && user.password === password) { /* si el email y password son correctos, se guarda en el localStorage */
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', user.userId.toString()); /* se guarda el id de usuario */
        this.userId = user.userId; /* se guarda el id de usuario */
        return true;
      }
    }
    alert('Email o contraseña incorrectos'); /* si no, se muestra un alert */
    return false;
  };

  logout(): void {
    localStorage.removeItem('isLoggedIn'); /* elimina el item isLoggedIn del localStorage */
  };

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true'; /* devuelve true si el item isLoggedIn es igual a true */
  };

  getUserId(): number {
    if (!this.isLoggedIn()) { /* si no esta logueado, devuelve 1, el usuario por defecto. */
      return 1;
    }
    if (this.userId === null) { /* si no hay id de usuario guardado, lo busca en el localStorage */
      const storedUserId = localStorage.getItem('userId');
      this.userId = storedUserId ? parseInt(storedUserId) : 1; /* si no hay id de usuario guardado, asigna 1 */
    }
    return this.userId; /* devuelve el id de usuario */
  };
};