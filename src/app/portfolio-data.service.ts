import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { Icono, AcercaDe, Experiencia, Estudios, Habilidades, Proyectos } from './interfaces';

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
        iconId: 1,
        img: 'assets/bxl-instagram.svg',
        name: 'Instagram',
        link: 'https://www.instagram.com/fede.muta',
      },
      {
        userId: 1,
        iconId: 2,
        img: 'assets/bxl-github.svg',
        name: 'github',
        link: 'https://github.com/FedeMuta',
      },
      {
        userId: 1,
        iconId: 3,
        img: 'assets/bxl-gmail.svg',
        name: 'gmail',
        link: 'mailto: fedemuta@gmail.com',
      },
      {
        userId: 1,
        iconId: 4,
        img: './assets/bxl-whatsapp.svg',
        name: 'whatsapp',
        link: 'https://web.whatsapp.com/send?phone=54911******87',
      },
      {
        userId: 2,
        iconId: 5,
        img: 'assets/bxl-instagram.svg',
        name: 'Instagram',
        link: 'https://www.instagram.com/agustina.muta',
      },
      {
        userId: 2,
        iconId: 6,
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
        apellido: 'Leal',
        descripcion: 'Profesional en administración y ventas en línea con habilidades en desarrollo web y conocimientos en tecnologías como HTML, CSS, JavaScript, TypeScript, Angular y SQL. Experiencia en la industria de la música y pasión por el desarrollo web. Autodidacta, aprendiz constante y capaz de adaptarme a nuevas tecnologías y entornos de trabajo.',
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
        cardId: 1,
        userId: 1,
        img: "/assets/logo sr.jpg",
        empresa: "La Polla S.A.",
        puesto: "Gerente E-commerce. 2016 - Presente",
        detalles: "Encargado de la coordinación, planificación y puesta en marcha de diferentes estrategias de venta. Supervisar y analizar los diferentes sectores, sus tareas y la colaboración entre los mismos, darles herramientas para mejorar. Resolución de conflictos y reclamos. Encargado de implementar nuevas tecnologías para el desarrollo de herramientas que nos ayuden día a día. "
      },
      {
        cardId: 2,
        userId: 1,
        img: "/assets/logo sr.jpg",
        empresa: "La Polla S.A.",
        puesto: "Administrativo - Ventas online. 2011 - 2016",
        detalles: "Desarrollo y actualización de hojas de calculo y bases de datos. Creación del sector de E-commerce. Administración, supervisión, análisis, ventas, atención al cliente y envíos en E-commerce."
      },
      {
        cardId: 3,
        userId: 1,
        img: "/assets/logo sr.jpg",
        empresa: "La Polla S.A.",
        puesto: "Administrativo. 2008 - 2011",
        detalles: "Registro contable de facturas , operaciones de cobro y pago. Desarrollo y actualización de hojas de calculo y bases de datos. Gestión de documentación. Participación en el desarrollo del sistema administrativo"
      },
      {
        cardId: 4,
        userId: 2,
        img: "/assets/logo sr.jpg",
        empresa: "SENASA",
        puesto: "Puerto. 2008 - 2011",
        detalles: "Registro contable de facturas , operaciones de cobro y pago. Desarrollo y actualización de hojas de calculo y bases de datos. Gestión de documentación. Participación en el desarrollo del sistema administrativo"
      },
    ],
    estudios: [
      {
        userId: 1,
        cardId: 1,
        institucion: "Argentina Programa",
        detalle: "Full Stack Developer Jr",
        inidate: "2022",
        endate: "Actualidad",
      },
      {
        userId: 1,
        cardId: 2,
        institucion: "Universidad Mercado Libre",
        detalle: "Varios cursos sobre e-commerce",
        inidate: "2015",
        endate: "2017",
      },
      {
        userId: 1,
        cardId: 3,
        institucion: "IAC",
        detalle: "Armado y reparación de PC",
        inidate: "2006",
        endate: "2006",
      },
      {
        userId: 1,
        cardId: 4,
        institucion: "Escuela de Bellas Artes Rogelio Yrurtia",
        detalle: "estudios secundarios con orientación en artes plásticas.",
        inidate: "2000",
        endate: "2005",
      },
      {
        userId: 2,
        cardId: 5,
        institucion: "universidad de la matanza",
        detalle: "licenciatura en filosofia de los perritos",
        inidate: "2032",
        endate: "2077",
      },
    ],
    skills: [
      {
        barId: 1,
        userId: 1,
        tipo: "blanda",
        habilidad: "Comunicación",
        color: "celeste",
        percent: "75",
      },
      {
        barId: 2,
        userId: 1,
        tipo: "blanda",
        habilidad: "Resolución de conflictos",
        color: "verde",
        percent: "80",
      },
      {
        barId: 3,
        userId: 1,
        tipo: "blanda",
        habilidad: "Liderazgo",
        color: "naranja",
        percent: "70",
      },
      {
        barId: 4,
        userId: 1,
        tipo: "dura",
        habilidad: "Desarrollo Web",
        color: "verde",
        percent: "75",
      },
      {
        barId: 5,
        userId: 1,
        tipo: "dura",
        habilidad: "Análisis de Datos",
        color: "rojo",
        percent: "30",
      },
      {
        barId: 6,
        userId: 1,
        tipo: "dura",
        habilidad: "Javascript",
        color: "celeste",
        percent: "70",
      },
      {
        barId: 7,
        userId: 2,
        tipo: "blanda",
        habilidad: "leer mucho",
        color: "rojo",
        percent: "100",
      },
      {
        barId: 8,
        userId: 2,
        tipo: "dura",
        habilidad: "tortilla de papa",
        color: "verde",
        percent: "70",
      },
      {
        barId: 9,
        userId: 2,
        tipo: "dura",
        habilidad: "adhiestramiento canino",
        color: "celeste",
        percent: "70",
      },
    ],
    proyectos: [
      {
        userId: 1,
        cardId: 1,
        nombre: "Proyecto 1",
        descripcion: "Descripción del proyecto 1",
        link: "#",
        img: "https://via.placeholder.com/350x200",
      }, 
      {
        userId: 1,
        cardId: 2,
        nombre: "Proyecto 2",
        descripcion: "Descripción del proyecto 2",
        link: "#",
        img: "https://via.placeholder.com/350x200",
      },
      {
        userId: 2,
        cardId: 3,
        nombre: "Proyecto 1",
        descripcion: "Descripción del proyecto 1",
        link: "#",
        img: "https://via.placeholder.com/350x200",
      }
    ]
  };

  arrayUpdated = new EventEmitter<any[]>();

  private userId = this.authService.getUserId(); /* obtengo el id de usuario */

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getIconosByUserId() {
    /* metodo para obtener los datos del array por id de usuario */
    return this.datos.iconos.filter((icono) => icono.userId === this.userId);
  };

  addIcono(icono: Icono) {
    icono.iconId = this.datos.iconos.length + 1;
    icono.userId = this.userId;
    this.datos.iconos.push(icono);
    this.arrayUpdated.emit(this.datos.iconos);
    /* metodo para agregar un dato al array */
  };

  deleteIcono(iconId: number) {
    /* metodo para eliminar un dato del array */
    const index = this.datos.iconos.findIndex(icono => icono.iconId === iconId);
    if (index !== -1) {
      this.datos.iconos.splice(index, 1);
    }
  };

  updateIcono(iconId: number, icono: Icono) {
    /* metodo para actualizar un dato del array */
    const index = this.datos.iconos.findIndex(icono => icono.iconId === iconId);
    if (index !== -1) {
      this.datos.iconos[index] = icono;
    }
  };

  getAcercaDeByUserId() {
    /* metodo para obtener los datos del array por id de usuario */
    return this.datos.acercaDe.filter(
      (acercaDe) => acercaDe.userId === this.userId
    );
  };

  addAcercaDe(acercaDe: AcercaDe) {
    acercaDe.userId = this.userId;
    this.datos.acercaDe.push(acercaDe);
    /* metodo para agregar un dato al array */
  };

  deleteAcercaDe(index: number) {
    /* metodo para eliminar un dato del array */
    this.datos.acercaDe.splice(index, 1);
  };

  updateAcercaDe(userId: number, acercaDe: AcercaDe) {
    /* metodo para actualizar un dato del array */
    const index = this.datos.acercaDe.findIndex(acerca => acerca.userId === userId);
    if (index !== -1 && this.datos.acercaDe[index].userId === userId) {
      this.datos.acercaDe[index] = acercaDe;
    }
  };

  getUbicationByUserId() { /* metodo para obtener ubicacion */
    const user = this.datos.acercaDe.find(acercaDe => acercaDe.userId === this.userId);
    return user ? user.ubicacion : '';
  }; // borrar y cambiar por getAcercaDeByUserId en componente map

  /* metodo para agregar ubicacion a acerca de */
  addUbicationFromUserId(ubicacion: string) {
    const user = this.datos.acercaDe.find(acercaDe => acercaDe.userId === this.userId);
    if (user) {
      user.ubicacion = ubicacion;
    }
  }; // borrar y cambiar por getAcercaDeByUserId en componente map

  updateUbicationFromUserId(ubicacion: string) {
    const user = this.datos.acercaDe.find(acercaDe => acercaDe.userId === this.userId);
    if (user) {
      user.ubicacion = ubicacion;
    }
  }; // borrar y cambiar por getAcercaDeByUserId en componente map

  deleteUbicationFromUserId() {
    const user = this.datos.acercaDe.find(acercaDe => acercaDe.userId === this.userId);
    if (user) {
      user.ubicacion = '';
    }
  }; // borrar y cambiar por getAcercaDeByUserId en componente map

  getExperienciaByUserId() {
    return this.datos.experiencia.filter(
      (experiencia) => experiencia.userId === this.userId
    );
  };

  addExperiencia(experiencia: Experiencia) {
    experiencia.cardId = (this.datos.experiencia.length + 1);
    experiencia.userId = this.userId;
    this.datos.experiencia.push(experiencia);
  };

  deleteExperiencia(cardId: number) {
    this.datos.experiencia = this.datos.experiencia.filter(
      (experiencia) => experiencia.cardId !== cardId
    );
  };

  updateExperiencia(cardId: number, experiencia: Experiencia) {
    const index = this.datos.experiencia.findIndex(
      (experiencia) => experiencia.cardId === cardId
    );
    this.datos.experiencia[index] = experiencia;
  };

  getEstudiosByUserId() {
    return this.datos.estudios.filter((estudio) => estudio.userId === this.userId);
  };

  addEstudio(estudio: Estudios) {
    estudio.cardId = (this.datos.estudios.length + 1);
    estudio.userId = this.userId;
    this.datos.estudios.push(estudio);
  };

  deleteEstudio(cardId: number) {
    this.datos.estudios = this.datos.estudios.filter(
      (estudio) => estudio.cardId !== cardId
    );
  };

  updateEstudio(cardId: number, estudio: Estudios) {
    const index = this.datos.estudios.findIndex(
      (estudio) => estudio.cardId === cardId
    );
    this.datos.estudios[index] = estudio;
  };

  getHabilidadesByUserId() {
    return this.datos.skills.filter(
      (habilidad) => habilidad.userId === this.userId
    );
  };

  addHabilidad(habilidad: Habilidades) {
    habilidad.userId = this.userId;
    this.datos.skills.push(habilidad);
  };

  deleteHabilidad(barId: number) {
    this.datos.skills = this.datos.skills.filter(
      (habilidad) => habilidad.barId !== barId
    );
  };

  updateHabilidad(barId: number, habilidad: Habilidades) {
    const index = this.datos.skills.findIndex(
      (habilidad) => habilidad.barId === barId
    );
    this.datos.skills[index] = habilidad;
  };

  getProyectosByUserId() {
    return this.datos.proyectos.filter(
      (proyecto) => proyecto.userId === this.userId
    );
  };

  addProyecto(proyecto: Proyectos) {
    proyecto.cardId = (this.datos.proyectos.length + 1);
    proyecto.userId = this.userId;
    this.datos.proyectos.push(proyecto);
  };

  deleteProyecto(cardId: number) {
    this.datos.proyectos = this.datos.proyectos.filter(
      (proyecto) => proyecto.cardId !== cardId
    );
  };

  updateProyecto(cardId: number, proyecto: Proyectos) {
    const index = this.datos.proyectos.findIndex(
      (proyecto) => proyecto.cardId === cardId
    );
    this.datos.proyectos[index] = proyecto;
  };
}


