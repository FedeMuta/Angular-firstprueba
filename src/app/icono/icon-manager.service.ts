import { Injectable } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';

@Injectable({
  providedIn: 'root'
})
export class IconManagerService {

  constructor(private dataService: PortfolioDataService) { }

  getIconos() {
    return this.dataService.getIconosByUserId(); /* obtengo los iconos del servicio de datos */
  }

  addIcono(icono: {index: number, userId: number, img: string, name: string, link: string}) { 
    this.dataService.addIcono(icono);
  }

  deleteIcono(index: number) { 
    this.dataService.deleteIcono(index);
  }

  onInit() {
    this.getIconos();
  }

}
