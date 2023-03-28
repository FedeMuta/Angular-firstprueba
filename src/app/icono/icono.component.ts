import { Component, Input } from '@angular/core';
import { IconManagerService } from 'src/app/icono/icon-manager.service';

@Component({
  selector: 'app-icono',
  templateUrl: "./Icono.component.html",
  styleUrls: ['./Icono.component.css'] 
})

export class IconoComponent {
  iconos = this.iconManager.getIconos(); /* obtengo los iconos del servicio de datos */
  /* datos a modificar al armar cada icono */
    
  constructor(private iconManager: IconManagerService) {}
}
