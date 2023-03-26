import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  fotoPerfil: string| null=null; /* variable para almacenar la foto del icono al loguearse */
  mostrarLogin: Boolean = false; /* variable para mostrar el formulario de logueo */

  constructor (public authService: AuthService) {}

  toggleLogin () : void { /* funcion para ocultar o mostrar el login al hacer click en el icono */
    this.mostrarLogin = !this.mostrarLogin;
  }

  onLogout(): void {
    this.toggleLogin();
    this.authService.logout();
  }
}
