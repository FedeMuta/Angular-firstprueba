import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  /* servicio para simular base de datos despues se encargara de controlar sus datos*/

  constructor(private authService: AuthService) {}

  private iconos: Array<{
    /* array para simular base de datos */ index: number;
    userId: number;
    img: string;
    name: string;
    link: string;
  }> = [
    {
      index: 1,
      userId: 1,
      img: 'assets/bxl-instagram.svg',
      name: 'Instagram',
      link: 'https://www.instagram.com/fede.muta',
    },
    {
      index: 2,
      userId: 1,
      img: 'assets/bxl-github.svg',
      name: 'github',
      link: 'https://github.com/FedeMuta',
    },
    {
      index: 3,
      userId: 1,
      img: 'assets/bxl-gmail.svg',
      name: 'gmail',
      link: 'mailto: fedemuta@gmail.com',
    },
    {
      index: 4,
      userId: 1,
      img: './assets/bxl-whatsapp.svg',
      name: 'whatsapp',
      link: 'https://web.whatsapp.com/send?phone=54911******87',
    },
    {
      index: 5,
      userId: 2,
      img: 'assets/bxl-instagram.svg',
      name: 'Instagram',
      link: 'https://www.instagram.com/agustina.muta',
    },
  ];

  userId = this.authService.getUserId(); /* obtengo el id de usuario */

  getIconosByUserId() {
    /* metodo para obtener los datos del array por id de usuario */
    return this.iconos.filter((icono) => icono.userId === this.userId);
  }

  addIcono(icono: {
    index: number;
    userId: number;
    img: string;
    name: string;
    link: string;
  }) {
    icono.index = this.iconos.length + 1;
    icono.userId = this.userId;
    this.iconos.push(icono);
    /* metodo para agregar un dato al array */
  }

  deleteIcono(index: number) {
    /* metodo para eliminar un dato del array */
    this.iconos = this.iconos.filter((icono) => icono.index !== index);
  }

}
