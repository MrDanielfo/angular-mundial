import { Injectable } from '@angular/core';

@Injectable()
export class CampeonesService {

  private campeones: any[] = [
    {
      campeon: 'Francia',
      subcampeon: 'Brasil',
      sede: 'Francia 98',
      descripcion: 'Francia levantó el mundial tras vencer al campeón defensor: Brasil',
      img: 'assets/img/campeones/francia.jpg'
    },
    {
      campeon: 'Brasil',
      subcampeon: 'Alemania',
      sede: 'Corea-Japón 2002',
      descripcion: 'Brasil se coronó campeón mundial por quinta vez. Turquía se quedó en tercer lugar y Corea en cuarto',
      img: 'assets/img/campeones/brasil.jpg'
    },
    {
      campeon: 'Italia',
      subcampeon: 'Francia',
      sede: 'Alemania 2006',
      descripcion: 'Italia venció a Francia en una final de infarto. El título les cortó una tanda de penaltis',
      img: 'assets/img/campeones/italia.jpg'
    },
    {
      campeon: 'España',
      subcampeon: 'Holanda',
      sede: 'Sudáfrica 2010',
      descripcion: 'España levantó la copa en el tiempo de compensación. La final no estuvo exenta de expulsiones y entradas fuertes',
      img: 'assets/img/campeones/spain.jpg'
    },
    {
      campeon: 'Alemania',
      subcampeon: 'Argentina',
      sede: 'Brasil 2014',
      descripcion: 'Alemania venció a Argentina en tiempo extra. Antes de eso, los teutones aplastaron a Brasil 7 - 1',
      img: 'assets/img/campeones/alemania.jpg'
    },
    {
      campeon: 'Por Definir',
      subcampeon: '?',
      sede: 'Rusia 2018',
      descripcion: 'La Copa del Mundo de Rusia promete ser una copa bastante peleada en donde las grandes potencias parten como favoritas',
      img: 'assets/img/campeones/rusia.jpg'
    }
  ];

  constructor() {
    console.log('Campeones servicio listo ');
  }

  getCampeones() {
    return this.campeones;
  }

  getCampeon(id: number) {
    return this.campeones[id];
  }
}

export interface Campeon {
  campeon: string;
  subcampeon: string;
  sede: string;
  descripcion: string;
  img: string;

}
