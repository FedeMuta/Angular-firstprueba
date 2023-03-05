import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardst',
  templateUrl: './cardst.component.html',
  styleUrls: ['./cardst.component.css']
})
export class CardstComponent {

  @Input() institucion="";
  @Input() detalle="";
  @Input() inidate="";
  @Input() endate="";
  @Input() img="";

}
