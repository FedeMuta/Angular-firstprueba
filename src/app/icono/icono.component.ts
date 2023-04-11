import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Icono } from 'src/app/interfaces';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-icono',
  templateUrl: "./Icono.component.html",
  styleUrls: ['./Icono.component.css'] 
})

export class IconoComponent implements OnInit {
  iconos = this.getIconos(); /* obtengo los iconos */
    
  ngOnInit() {
    this.iconos = this.getIconos();
    // Escuchar el evento para actualizar el array de iconos
    this.dataService.arrayUpdated.subscribe(() => {
      this.iconos = this.getIconos();
    });
  }

  constructor(private dataService: PortfolioDataService, private headerService: HeaderComponent) {}

  mostrarDel: Boolean = this.mostrarEdit(); /* variable para mostrar los iconos para eliminar */

  mostrarEdit() {
    return this.headerService.mostrarEdit;
  }

  dAndD() {
    return !this.isLogged() || (this.isLogged() && !this.mostrarEdit()); /* regla para mostrar el drag and drop */
  }

  isLogged() {
    return this.dataService.isLoggedIn();
  }

  getIconos() {
    return this.dataService.getIconosByUserId(); /* obtengo los iconos del servicio de datos */
  }

  deleteIcono(index: number, event: Event) { 
    event.preventDefault();
    this.dataService.deleteIcono(index);
    this.iconos = this.getIconos();
  }

  updateIcono(index: number, icono: Icono) {
    this.dataService.updateIcono(index, icono);
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.iconos, event.previousIndex, event.currentIndex);
  }
}
