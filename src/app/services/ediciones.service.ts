import { Injectable } from '@angular/core';

@Injectable()
export class EdicionesService {

  private ediciones: Edicion[] = [
    {
      nombre: 'Francia 98',
      caracteristicas: 'Fue el primer mundial con 32 equipos. México logró avanzar a octavos de final después empatar ante Holanda y Bélgica',
      descripcion: 'Francia se coronó por primera vez como campeón mundial al vencer a Brasil. Croacia se quedó con el tercer lugar',
      img: 'assets/img/ediciones/francia98.jpg'
    },
    {
      nombre: 'Corea Japón 2002',
      caracteristicas: 'Fue el primer mundial en suelo asiático. México avanzó tras vencer a Croacia, Ecuador y empatar ante Italia',
      descripcion: 'Brasil recuperó el cetro de campeón al vencer a Alemania. La anfitriona Corea logró su mejor papel en copas mundiales',
      img: 'assets/img/ediciones/coreajapon02.jpg'
    },
    {
      nombre: 'Alemania 2006',
      caracteristicas: 'Uno de los mejores mundiales en relación a su infraestructura. México logró ser cabeza de serie en el sorteo',
      descripcion: 'El mundial de las potencias, pues Italia y Francia se disputaron la copa que al final quedó en manos de los Azurri',
      img: 'assets/img/ediciones/alemania06.jpg'
    },
    {
      nombre: 'Sudáfrica 2010',
      caracteristicas: 'Primer mundial en territorio africano. Se rompió la regla que decía que todo anfitrion pasaba de fase de grupos',
      descripcion: 'Por primera vez la selección de España se coronó campeona del mundo',
      img: 'assets/img/ediciones/sudafrica10.jpg'
    },
    {
      nombre: 'Brasil 2014',
      caracteristicas: 'La copa del mundo regresó a suelo brasileño, aunque la gloria no fue para los cariocas. México de nueva cuenta avanzó a octavos',
      descripcion: 'Alemania demostró que pase lo que pase siempre será candidata al título y el gran rival a vencer',
      img: 'assets/img/ediciones/brasil14.jpg'
    },
    {
      nombre: 'Rusia 2018',
      caracteristicas: 'El primer mundial en Rusia promete ser un encuentro de grandes futbolístas e individualidades',
      descripcion: 'Los principales candidatos a levantar la Copa del Mundo son Alemania, Argentina, Francia y Brasil',
      img: 'assets/img/ediciones/rusia18.jpg'
    }
  ];

  constructor() {
    console.log('Ediciones servicio listo');
  }

  getEdiciones() {
    return this.ediciones;
  }

  getEdicion(id: number) {
    return this.ediciones[id];
  }
}

export interface Edicion {
  nombre: string;
  caracteristicas: string;
  descripcion: string;
  img: string;

}
