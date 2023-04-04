import { Component, Input } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';

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

  constructor(private dataService: PortfolioDataService) { }

  estudios = this.getEstudios();

  getEstudios() {
    return this.dataService.getEstudiosByUserId();
  }

  addEstudio(estudio: {userId: number, institucion: string, detalle: string, inidate: string, endate: string, img: string}) {
    this.dataService.addEstudio(estudio);
  }

  deleteEstudio(cardID: number) {
    this.dataService.deleteEstudio(cardID);
  }

  updateEstudio(cardID: number, estudio: {userId: number, institucion: string, detalle: string, inidate: string, endate: string, img: string}) {
    this.dataService.updateEstudio(cardID, estudio);
  }

}
