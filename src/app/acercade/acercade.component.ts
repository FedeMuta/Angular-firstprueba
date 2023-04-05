import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { AcercaDe } from 'src/app/interfaces';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
  /* estos datos los modificaria el usuario */
  @Input() nombre = "";
  @Input() descripcion = "";
  @Input() foto = "";

  datos = this.getAcercaDe(); /* obtengo los datos */

  constructor(private dataService: PortfolioDataService) {}

  getAcercaDe() {
    return this.dataService.getAcercaDeByUserId(); /* obtengo los datos del servicio de datos */
  }

  addAcercaDe(acercaDe: AcercaDe) { 
    this.dataService.addAcercaDe(acercaDe);
  }

  deleteAcercaDe(index: number) { 
    this.dataService.deleteAcercaDe(index);
  }

  updateAcercaDe(index: number, acercaDe: AcercaDe) { 
    this.dataService.updateAcercaDe(index, acercaDe);
  }
}
