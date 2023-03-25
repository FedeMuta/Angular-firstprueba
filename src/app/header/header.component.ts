import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  fotoPerfil: string| null=null; /* variable para almacenar la foto del icono al loguearse */
  mostrarLogin: Boolean = false; /* variable para mostrar el formulario de logueo */

  toggleLogin () : void { /* funcion para ocultar o mostrar el login al hacer click en el icono */
    this.mostrarLogin = !this.mostrarLogin;
  }
}
