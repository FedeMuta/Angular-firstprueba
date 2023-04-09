import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { Estudios } from 'src/app/interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cardst',
  templateUrl: './cardst.component.html',
  styleUrls: ['./cardst.component.css']
})
export class CardstComponent {

  @Input() institucion = "";
  @Input() detalle = "";
  @Input() inidate = "";
  @Input() endate = "";
  @Input() img = "";

  constructor(private dataService: PortfolioDataService) { }

  estudios = this.getEstudios();

  isLogged() {
    return this.dataService.isLoggedIn();
  }

  getEstudios() {
    return this.dataService.getEstudiosByUserId();
  }

  addEstudio(estudio: Estudios) {
    this.dataService.addEstudio(estudio);
  }

  deleteEstudio(cardID: number) {
    this.dataService.deleteEstudio(cardID);
  }

  updateEstudio(cardID: number, estudio: Estudios) {
    this.dataService.updateEstudio(cardID, estudio);
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.estudios, event.previousIndex, event.currentIndex);
  }

}
