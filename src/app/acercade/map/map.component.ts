import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  ubicacion = "Buenos Aires, Argentina";
  center: google.maps.LatLngLiteral =
    {} as google.maps.LatLngLiteral; /* almacena las coordenadas */
  zoom = 11;
  marker: google.maps.MarkerOptions = {}; /* agrego un marcador para el mapa */

  constructor(private http: HttpClient) {}

  private getLatLngFromAddress(
    address: string
  ): Promise<google.maps.LatLngLiteral> {
    const apiKey = "mi key";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    /* uso el geocode de la api google maps para obtener las coordenadas de la direccion */

    return this.http
      .get(url)
      .toPromise()
      .then((response: any) => {
        const location = response.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
      });
  }
  /* agrego un marcador para el mapa */
  private addMarker(): void {
    this.marker = {
      position: this.center,
      title: "Mi ubicación",
    };
  }

  async ngOnInit() {
    const address = this.ubicacion;
    this.center = await this.getLatLngFromAddress(address);
    this.addMarker();
  }
}
