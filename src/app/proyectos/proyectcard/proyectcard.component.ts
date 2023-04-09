import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { Proyectos } from 'src/app/interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-proyectcard',
  templateUrl: './proyectcard.component.html',
  styleUrls: ['./proyectcard.component.css']
})
export class ProyectcardComponent {

  @Input() name = "";
  @Input() descripcion = "";
  @Input() link = "";
  @Input() img = "";

  proyectos = this.getProyectos();

  constructor(public dataService: PortfolioDataService) { }

  isLogged() {
    return this.dataService.isLoggedIn();
  };

  getProyectos() {
    return this.dataService.getProyectosByUserId();
  };

  addProyecto(proyecto: Proyectos) {
    this.dataService.addProyecto(proyecto);
  };

  deleteProyecto(cardId: number) {
    this.dataService.deleteProyecto(cardId);
  };

  updateProyecto(cardId: number, proyecto: Proyectos) {
    this.dataService.updateProyecto(cardId, proyecto);
  };

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.proyectos, event.previousIndex, event.currentIndex);
  };
}
