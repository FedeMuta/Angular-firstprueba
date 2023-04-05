import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { Proyectos } from 'src/app/interfaces';

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

  constructor(private dataService: PortfolioDataService) { }

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
}
