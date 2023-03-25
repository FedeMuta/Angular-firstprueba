import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  fotoPerfil: string| null=null; /* variable para almacenar la foto del icono al loguearse */
  mostrarLogin: Boolean = false; /* variable para mostrar el formulario de logueo */

}
