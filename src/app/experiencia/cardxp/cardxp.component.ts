import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';

@Component({
  selector: 'app-cardxp',
  templateUrl: './cardxp.component.html',
  styleUrls: ['./cardxp.component.css']
})
export class CardxpComponent{

  constructor(private dataService: PortfolioDataService) { }

  experiencia = this.getExperiencia();

    getExperiencia() {
      return this.dataService.getExperienciaByUserId();
    }

    addExperiencia(experiencia: {
    cardID: number; userId: number; img: string; empresa: string; puesto: string; detalles: string;
  }) {
    this.dataService.addExperiencia(experiencia);
  }

  deleteExperiencia(cardID: number) {
    this.dataService.deleteExperiencia(cardID);
  }

  updateExperiencia(cardID: number, experiencia: {
    cardID: number; userId: number; img: string; empresa: string; puesto: string; detalles: string;
  }) {
    this.dataService.updateExperiencia(cardID, experiencia);
  }
}

