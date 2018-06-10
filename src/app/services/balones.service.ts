import { Injectable } from '@angular/core';

@Injectable()
export class BalonesService {

    private balones: Balon[] = [
      {
        nombre: 'Tricolore',
        edicion: 'Francia 98',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Este balón fue usado durante los partidos de preparación y durante el mundial de Francia 1998. A pesar de ser tener los colores distintivos de la bandera de Francia, repetía el mismo patrón de los balones anteriores',
        img: 'assets/img/balones/balonfrancia.jpg'
      },
      {
        nombre: 'Fevernova',
        edicion: 'Corea-Japón 2002',
        descripcion: 'Se trató de un balón con un diseño distinto. El diseño exterior se inspiró en la cultura de los países anfitriones',
        img: 'assets/img/balones/baloncorea.jpg'
      },
      {
        nombre: 'Teamgeist',
        edicion: 'Alemania 2006',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Se trató de un balón con un diseño sencillo, en homenaje a la serie Teamgeist. En la final se jugó con una edición especial que presumía gajos en color dorado',
        img: 'assets/img/balones/balonalemania.jpg'
      },
      {
        nombre: 'Jabulani',
        edicion: 'Sudáfrica 2010',
        descripcion: 'Desde el nombre este balón llevó el sello polémico, aunque éste en realidad alude a la cultura sudafricana aborigen',
        img: 'assets/img/balones/balonsudafrica.jpg'
      },
      {
        nombre: 'Brazuca',
        edicion: 'Brasil 2014',
        descripcion: 'Un diseño colorido, inspirado en la variopinta cultura brasileña. La vejiga de la pelota Brazuca está hecha de látex',
        img: 'assets/img/balones/balonbrasil.jpg'
      },
      {
        nombre: 'Telstar 18',
        edicion: 'Rusia 2018',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Sobriedad y elegancia, un par de características con las que cuenta este balón en su renovado diseño. Un homenaje hacia los rusos',
        img: 'assets/img/balones/balonrusia.jpg'
      }
    ];

  constructor() {
    console.log('Balones servicio listo ');
  }

  getBalones(): Balon[] {
    return this.balones;
  }
  getBalon(id: string) {
    return this.balones[id];
  }

  buscarCosa(termino: string ): Balon[] {
    const balonesArr: Balon[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.balones.length; i++) {
      const balon = this.balones[i];
      const nombre = balon.nombre.toLowerCase();
      if (nombre.indexOf( termino ) >= 0 ) {
        balon.idx = i;
        balonesArr.push( balon );
      }
    }

    return balonesArr;
  }
}

export interface Balon {
  nombre: string;
  edicion: string;
  descripcion: string;
  img: string;
  idx?: number;
}
