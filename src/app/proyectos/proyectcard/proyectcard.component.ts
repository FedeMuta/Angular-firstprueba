import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyectcard',
  templateUrl: './proyectcard.component.html',
  styleUrls: ['./proyectcard.component.css']
})
export class ProyectcardComponent {

  @Input() name="";
  @Input() descripcion="";
  @Input() link="";
  @Input() img="";

}
