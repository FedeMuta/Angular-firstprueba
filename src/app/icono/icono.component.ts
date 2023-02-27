import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.css'],
})
export class IconoComponent {
  @Input() link = '';
  @Input() imagen = '';
  @Input() alt = '';
}