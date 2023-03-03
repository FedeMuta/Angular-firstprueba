import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  /* mi idea es que el usuario despues seleccione su ubicacion, por ahora no se como implementarlo */
  /* pero no quiero que copie y pege el iframe, por eso la api. */
  center: google.maps.LatLngLiteral = { lat: -34.6158068, lng: -58.4741012 };
  zoom = 11.5;

}
