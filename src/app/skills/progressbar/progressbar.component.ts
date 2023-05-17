import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { Habilidades } from 'src/app/interfaces';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent {

  @Input() tipo: string = "";
  @Input() color = "";
  @Input() percent = "";
  @Input() habilidad = "";

  constructor(private dataService: PortfolioDataService) { }

  habilidades = this.getHabilidades();

  getHabilidades() {
    return this.dataService.getHabilidadesByUserId();
  }

  addHabilidad(habilidad: Habilidades) {
    this.dataService.addHabilidad(habilidad);
  }

  deleteHabilidad(cardID: number) {
    this.dataService.deleteHabilidad(cardID);
  }

  updateHabilidad(cardID: number, habilidad: Habilidades) {
    this.dataService.updateHabilidad(cardID, habilidad);
  }
}
