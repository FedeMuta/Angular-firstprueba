import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  fotoPerfil: string | null = null; /* variable para almacenar la foto del icono al loguearse */
  mostrarLogin: Boolean = false; /* variable para mostrar el formulario de logueo */
  mostrarEdit: Boolean = false; /* variable para mostrar iconos de edicion*/
  addEdit: Boolean = false; /* variable para mostrar el formulario de edicion */

  constructor(private authService: AuthService, private dataService: PortfolioDataService) { }

  isLogged(): boolean { /* funcion para saber si el usuario esta logueado */
    return this.dataService.isLoggedIn();
  }

  toggleLogin(): void { /* funcion para ocultar o mostrar el login al hacer click en el icono */
    this.mostrarLogin = !this.mostrarLogin;
  }

  toggleEdit(): void { /* funcion para ocultar o mostrar el formulario de edicion de datos */
    this.mostrarEdit = !this.mostrarEdit;
  }

  onLogout(): void {
    this.authService.logout();
    window.location.reload();
  }

  addIconx(): void {
    this.addEdit = !this.addEdit;
  }
}
