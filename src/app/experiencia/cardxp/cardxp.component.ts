import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardxp',
  templateUrl: './cardxp.component.html',
  styleUrls: ['./cardxp.component.css']
})
export class CardxpComponent {

  @Input() id = ""; /* tengo que generar un ID diferente para cada tarjeta para que no se cierren y abran todas juntas */
  @Input() empresa = "";
  @Input() puesto = "";
  @Input() detalles = "";

}

