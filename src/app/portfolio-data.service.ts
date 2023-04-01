import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  /* servicio para simular base de datos despues se encargara de controlar sus datos*/

  constructor(private authService: AuthService) {}

  private datos = {
    /* array para simular base de datos */
    iconos: [
      {
        userId: 1,
        img: 'assets/bxl-instagram.svg',
        name: 'Instagram',
        link: 'https://www.instagram.com/fede.muta',
    },
    {
      userId: 1,
      img: 'assets/bxl-github.svg',
      name: 'github',
      link: 'https://github.com/FedeMuta',
    },
    {
      userId: 1,
      img: 'assets/bxl-gmail.svg',
      name: 'gmail',
      link: 'mailto: fedemuta@gmail.com',
    },
    {
      userId: 1,
      img: './assets/bxl-whatsapp.svg',
      name: 'whatsapp',
      link: 'https://web.whatsapp.com/send?phone=54911******87',
    },
    {
      userId: 2,
      img: 'assets/bxl-instagram.svg',
      name: 'Instagram',
      link: 'https://www.instagram.com/agustina.muta',
    }],
    acercaDe: [{
      userId: 1,
      img: 'assets/foto-perfil.jpg',
      nombre: 'Federico',
      apellido: 'Muta',
      descripcion: 'Lorem ippsum  Lorem',
      ubicacion: 'Argentina',
    },{
      userId: 2,
      img: 'assets/foto-perfil.jpg',
      nombre: 'Agustina',
      apellido: 'Muta',
      descripcion: 'Lorem ippsum  Lorem',
      ubicacion: 'Argentina',
    }]};

  private userId = this.authService.getUserId(); /* obtengo el id de usuario */

  getIconosByUserId() {
    /* metodo para obtener los datos del array por id de usuario */
    return this.datos.iconos.filter((icono) => icono.userId === this.userId);
  }

  addIcono(icono: {
    index: number;
    userId: number;
    img: string;
    name: string;
    link: string;
  }) {
    icono.index = this.datos.iconos.length + 1;
    icono.userId = this.userId;
    this.datos.iconos.push(icono);
    /* metodo para agregar un dato al array */
  }

  deleteIcono(index: number) {
    /* metodo para eliminar un dato del array */
    this.datos.iconos.splice(index, 1);    
  }

  updateIcono(index: number, icono: {
    index: number;
    userId: number;
    img: string;
    name: string;
    link: string;
  }) {
    /* metodo para actualizar un dato del array */
    this.datos.iconos[index] = icono;
  }

  getAcercaDeByUserId() {
    /* metodo para obtener los datos del array por id de usuario */
    return this.datos.acercaDe.filter((acercaDe) => acercaDe.userId === this.userId);
  }

  addAcercaDe(acercaDe: {
    index: number;
    userId: number;
    img: string;
    nombre: string;
    apellido: string;
    descripcion: string;
    ubicacion: string;
  }) {
    acercaDe.index = this.datos.acercaDe.length + 1;
    acercaDe.userId = this.userId;
    this.datos.acercaDe.push(acercaDe);
    /* metodo para agregar un dato al array */
  }

  deleteAcercaDe(index: number) {
    /* metodo para eliminar un dato del array */
    this.datos.acercaDe.splice(index, 1);    
  }

  updateAcercaDe(index: number, acercaDe: {
    index: number;
    userId: number;
    img: string;
    nombre: string;
    apellido: string;
    descripcion: string;
    ubicacion: string;
  }) {
    /* metodo para actualizar un dato del array */
    this.datos.acercaDe[index] = acercaDe;
  }
}
