import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
  /* estos datos los modificaria el usuario */
  @Input() nombre = "";
  @Input() descripcion = "";
  @Input() foto = "";
}
