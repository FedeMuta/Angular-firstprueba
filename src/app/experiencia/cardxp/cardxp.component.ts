import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { Experiencia } from 'src/app/interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

    addExperiencia(experiencia: Experiencia) {
    this.dataService.addExperiencia(experiencia);
  }

  deleteExperiencia(cardID: number) {
    this.dataService.deleteExperiencia(cardID);
  }

  updateExperiencia(cardID: number, experiencia: Experiencia) {
    this.dataService.updateExperiencia(cardID, experiencia);
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.experiencia, event.previousIndex, event.currentIndex);
  }
}

