import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { Icono } from 'src/app/interfaces';

@Component({
  selector: 'app-icon-manager',
  templateUrl: './icon-manager.component.html',
  styleUrls: ['./icon-manager.component.css']
})
export class IconManagerComponent {

  constructor(private dataService: PortfolioDataService) { };

  possibleIcons: Icono[] = [
    { userId: 0 , iconId: 0, img: 'assets/bxl-instagram.svg', name: 'Instagram', link: ''},
    { userId: 0, iconId: 0, img: 'assets/bxl-github.svg', name: 'GitHub', link: ''},
    { userId: 0, iconId: 0, img: 'assets/bxl-gmail.svg', name: 'Mail', link: ''},
    { userId: 0, iconId: 0, img: 'assets/bxl-whatsapp.svg', name: 'Whatsapp', link: ''},
  ];

  selectedIcono: any;

  addIcono(icon: Icono) {
    this.dataService.addIcono(icon)
    console.log (this.dataService.getIconosByUserId());
  }
  
  selectIcono(icono: any) {
  this.selectedIcono = icono;
}

}

