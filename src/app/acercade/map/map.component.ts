import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
    
  center: google.maps.LatLngLiteral = {lat: -34.6158068, lng: -58.4741012};
  zoom = 11.5;

}
