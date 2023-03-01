import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icono',
  template: '<a [href]="link" target="_blank"><img [src]="imagen" [alt]="alt" class="new" [title]="alt" /></a>',
  styleUrls: ['./icono.component.css'],
})
export class IconoComponent {
  @Input() link = '';
  @Input() imagen = '';
  @Input() alt = '';
}
