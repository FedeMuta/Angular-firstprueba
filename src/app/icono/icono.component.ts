import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icono',
  template:
    '<a [href]="link" target="_blank"><img [src]="imagen" [alt]="alt" class="new" [title]="alt" /></a>',
  styles: ['.new{margin: 1vh;height: 3.6vh;}'], 
})
//no se si es correcta mi practica, pero al ser tan poco html y css, opte por unificar todo en un archivo solo.
export class IconoComponent {
  /* datos a modificar al armar cada icono */
  @Input() link = '';
  @Input() imagen = '';
  @Input() alt = '';
}
