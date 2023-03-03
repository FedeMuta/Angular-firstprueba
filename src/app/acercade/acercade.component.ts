import { Component, Input } from '@angular/core';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
  map = MapComponent;
  @Input() nombre="";
  @Input() descripcion="";
  @Input() foto="";
}
