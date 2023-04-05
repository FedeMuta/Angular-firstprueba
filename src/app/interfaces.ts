export interface Icono {
    userId: number,
    iconId: number
    img: string,
    name: string,
    link: string,
};

export interface AcercaDe {
    userId: number,
    img: string,
    nombre: string,
    apellido: string,
    descripcion: string,
    ubicacion: string,
};

export interface Experiencia {
    userId: number,
    cardId: number,
    img: string,
    empresa: string,
    puesto: string,
    detalles: string;
};

export interface Estudios {
    userId: number,
    cardId: number,
    institucion: string,
    detalle: string,
    inidate: string,
    endate: string,
    img: string,
};

export interface Habilidades {
    userId: number,
    barId: number,
    tipo: string,
    habilidad: string,
    color: string,
    percent: string,
};

export interface Proyectos {
    userId: number,
    cardId: number,
    nombre: string,
    descripcion: string,
    link: string,
    img: string,
};

