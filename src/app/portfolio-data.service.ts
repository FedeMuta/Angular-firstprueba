import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  /* servicio para simular base de datos despues se encargara de controlar sus datos*/

  constructor(private authService: AuthService) { }

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
      },
      {
        userId: 2,
        img: 'assets/bxl-gmail.svg',
        name: 'gmail',
        link: 'mailto: agusmuta@gmail.com',
      },
    ],
    acercaDe: [
      {
        userId: 1,
        img: 'assets/foto-perfil.jpg',
        nombre: 'Federico',
        apellido: 'Muta',
        descripcion: 'Lorem ippsum  Lorem',
        ubicacion: 'Liniers, Buenos Aires, Argentina',
      },
      {
        userId: 2,
        img: 'assets/foto-perfil.jpg',
        nombre: 'Agustina',
        apellido: 'Muta',
        descripcion: 'Lorem ippsum  Lorem',
        ubicacion: 'Monte Grande, Buenos Aires, Argentina',
      },
    ],
    experiencia: [
      {
        cardID: "1",
        userId: 1,
        img: "/assets/logo sr.jpg",
        empresa: "La Polla S.A.",
        puesto: "Gerente E-commerce",
        detalles: "2016 - Presente. Encargado de la coordinación, planificación y puesta en marcha de diferentes estrategias de venta. Supervisar y analizar los diferentes sectores, sus tareas y la colaboración entre los mismos, darles herramientas para mejorar. Resolución de conflictos y reclamos. Encargado de implementar nuevas tecnologías para el desarrollo de herramientas que nos ayuden día a día. "
      },
      {
        cardID: "2",
        userId: 1,
        img: "/assets/logo sr.jpg",
        empresa: "La Polla S.A.",
        puesto: "Administrativo - Ventas online",
        detalles: "2011 - 2016. Desarrollo y actualización de hojas de calculo y bases de datos. Creación del sector de E-commerce. Administración, supervisión, análisis, ventas, atención al cliente y envíos en E-commerce."
      },
      {
        cardID: "3",
        userId: 1,
        img: "/assets/logo sr.jpg",
        empresa: "La Polla S.A.",
        puesto: "Administrativo",
        detalles: "2008 - 2011. Registro contable de facturas , operaciones de cobro y pago. Desarrollo y actualización de hojas de calculo y bases de datos. Gestión de documentación. Participación en el desarrollo del sistema administrativo"
      },
      {
        cardID: "4",
        userId: 2,
        img: "/assets/logo sr.jpg",
        empresa: "SENASA",
        puesto: "Puerto",
        detalles: "2008 - 2011. Registro contable de facturas , operaciones de cobro y pago. Desarrollo y actualización de hojas de calculo y bases de datos. Gestión de documentación. Participación en el desarrollo del sistema administrativo"
      },
    ],
    estudios: [
      {
        userId: 1,
        institucion: "Argentina Programa",
        detalle: "Full Stack Developer Jr",
        inidate: "2022",
        endate: "Actualidad",
        img: "",
      },
      {
        userId: 1,
        institucion: "Universidad Mercado Libre",
        detalle: "Varios cursos sobre e-commerce",
        inidate: "2015",
        endate: "2017",
        img: "",
      },
      {
        userId: 1,
        institucion: "IAC",
        detalle: "Armado y reparación de PC",
        inidate: "2006",
        endate: "2006",
        img: "",
      },
      {
        userId: 1,
        institucion: "Escuela de Bellas Artes Rogelio Yrurtia",
        detalle: "estudios secundarios con orientación en artes plásticas.",
        inidate: "2000",
        endate: "2005",
        img: "",
      },
      {
        userId: 2,
        institucion: "universidad de la matanza",
        detalle: "licenciatura en filosofia de los perritos",
        inidate: "2032",
        endate: "2077",
        img: "",
      },
    ],
  };

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

  updateIcono(
    index: number,
    icono: {
      index: number;
      userId: number;
      img: string;
      name: string;
      link: string;
    }
  ) {
    /* metodo para actualizar un dato del array */
    this.datos.iconos[index] = icono;
  }

  getAcercaDeByUserId() {
    /* metodo para obtener los datos del array por id de usuario */
    return this.datos.acercaDe.filter(
      (acercaDe) => acercaDe.userId === this.userId
    );
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

  updateAcercaDe(
    index: number,
    acercaDe: {
      index: number;
      userId: number;
      img: string;
      nombre: string;
      apellido: string;
      descripcion: string;
      ubicacion: string;
    }
  ) {
    /* metodo para actualizar un dato del array */
    this.datos.acercaDe[index] = acercaDe;
  }

  getUbicationFromUserId() { /* metodo para obtener ubicacion */
    const user = this.datos.acercaDe.find(acercaDe => acercaDe.userId === this.userId);
    return user ? user.ubicacion : '';
  }

  /* metodo para agregar ubicacion a acerca de */
  addUbicationFromUserId(ubicacion: string) {
    const user = this.datos.acercaDe.find(acercaDe => acercaDe.userId === this.userId);
    if (user) {
      user.ubicacion = ubicacion;
    }
  }

  updateUbicationFromUserId(ubicacion: string) {
    const user = this.datos.acercaDe.find(acercaDe => acercaDe.userId === this.userId);
    if (user) {
      user.ubicacion = ubicacion;
    }
  }

  deleteUbicationFromUserId() {
    const user = this.datos.acercaDe.find(acercaDe => acercaDe.userId === this.userId);
    if (user) {
      user.ubicacion = '';
    }
  }

  getExperienciaByUserId() {
    return this.datos.experiencia.filter(
      (experiencia) => experiencia.userId === this.userId
    );
  }

  addExperiencia(experiencia: {
    cardID: string;
    userId: number;
    img: string;
    empresa: string;
    puesto: string;
    detalles: string;
  }) {
    experiencia.cardID = (this.datos.experiencia.length + 1).toString();
    experiencia.userId = this.userId;
    this.datos.experiencia.push(experiencia);
  }

  deleteExperiencia(cardID: string) {
    this.datos.experiencia = this.datos.experiencia.filter(
      (experiencia) => experiencia.cardID !== cardID
    );
  }

  updateExperiencia(
    cardID: string,
    experiencia: {
      cardID: string;
      userId: number;
      img: string;
      empresa: string;
      puesto: string;
      detalles: string;
    }
  ) {
    const index = this.datos.experiencia.findIndex(
      (experiencia) => experiencia.cardID === cardID
    );
    this.datos.experiencia[index] = experiencia;
  }

  getEstudiosByUserId() {
    return this.datos.estudios.filter((estudio) => estudio.userId === this.userId);
  }

  addEstudio(estudio: {
    userId: number;
    institucion: string;
    detalle: string;
    inidate: string;
    endate: string;
    img: string;
  }) {
    estudio.userId = this.userId;
    this.datos.estudios.push(estudio);
  }

  deleteEstudio(index: number) {
    this.datos.estudios.splice(index, 1);
  }

  updateEstudio(
    index: number,
    estudio: {
      userId: number;
      institucion: string;
      detalle: string;
      inidate: string;
      endate: string;
      img: string;
    }
  ) {
    this.datos.estudios[index] = estudio;
  }
}


