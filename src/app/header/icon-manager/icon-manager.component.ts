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
    { userId: 0 , iconId: 0, img: 'assets/bxl-instagram.svg', name: 'Instagram', link: 'https://www.instagram.com/'},
    { userId: 0, iconId: 0, img: 'assets/bxl-github.svg', name: 'GitHub', link: 'https://github.com/'},
    { userId: 0, iconId: 0, img: 'assets/bxl-gmail.svg', name: 'Mail', link: 'mailto: '},
    { userId: 0, iconId: 0, img: 'assets/bxl-whatsapp.svg', name: 'Whatsapp', link: 'https://web.whatsapp.com/send?phone='},
  ];

  selectedIcono: any = this.possibleIcons[0];

  addIcono(icon: Icono) {
    this.dataService.addIcono(icon)
    console.log (this.dataService.getIconosByUserId());
  }
  
  selectIcono(icono: Icono) {
  this.selectedIcono = icono;
}

}

