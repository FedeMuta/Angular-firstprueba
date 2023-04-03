import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';

@Component({
  selector: 'app-cardxp',
  templateUrl: './cardxp.component.html',
  styleUrls: ['./cardxp.component.css']
})
export class CardxpComponent{

  constructor(private dataService: PortfolioDataService) { }

  experiencia = this.dataService.getExperienciaByUserId();

    addExperiencia(experiencia: {
    cardID: string; userId: number; img: string; empresa: string; puesto: string; detalles: string;
  }) {
    this.dataService.addExperiencia(experiencia);
  }

  deleteExperiencia(cardID: string) {
    this.dataService.deleteExperiencia(cardID);
  }

  updateExperiencia(cardID: string, experiencia: {
    cardID: string; userId: number; img: string; empresa: string; puesto: string; detalles: string;
  }) {
    this.dataService.updateExperiencia(cardID, experiencia);
  }
}

