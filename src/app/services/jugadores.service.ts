import { Injectable } from '@angular/core';

@Injectable()
export class JugadoresService {

  jugadores: Jugador[] = [
    {
      nombre: 'Davor Suker',
      nacionalidad: 'Croacia',
      nacimiento: '1968-01-01',
      clubes: 'Sevilla, Real Madrid, Arsenal',
      biografia: 'Suker fue el goleador de la Copa del Mundo de Francia 1998 con 6 goles. El croata también disputó el siguiente mundial',
      img: 'assets/img/jugadores/suker98.jpg'
    },
    {
      nombre: 'Zinedine Zidane',
      nacionalidad: 'Francia',
      nacimiento: '1972-06-23',
      clubes: 'Juventus y Real Madrid',
      biografia: 'Zidane fue el gran capitán de la selección francesa que consiguió la Copa del Mundo en Francia',
      img: 'assets/img/jugadores/zidane98.jpg'
    },
    {
      nombre: 'Ronaldo Nazario',
      nacionalidad: 'Brasil',
      nacimiento: '1976-09-22',
      clubes: 'Juventus y Real Madrid',
      biografia: 'Zidane fue el gran capitán de la selección francesa que consiguió la Copa del Mundo en Francia',
      img: 'assets/img/jugadores/ronaldo02.jpg'
    },
    {
      nombre: 'Oliver Kahn',
      nacionalidad: 'Alemania',
      nacimiento: '1969-06-15',
      clubes: 'Bayern Munich',
      biografia: 'Dentro y fuera de la cancha Kahn fue reconocido como un tipo frío. Una garantía en la portería de Alemania',
      img: 'assets/img/jugadores/kahn02.jpg'
    },
    {
      nombre: 'Gianluigi Buffon',
      nacionalidad: 'Italia',
      nacimiento: '1978-01-28',
      clubes: 'Parma y Juventus',
      // tslint:disable-next-line:max-line-length
      biografia: 'Buffon es el modelo de futbolista que todo jugador quiere ser: defendió los colores de sólo dos equipos, fue campeón de Europa con su club y campeón del mundo',
      img: 'assets/img/jugadores/buffon06.jpg'
    },
    {
      nombre: 'Fabio Cannavaro',
      nacionalidad: 'Italia',
      nacimiento: '1973-09-13',
      clubes: 'Napoli, Juventus y Real Madrid',
      // tslint:disable-next-line:max-line-length
      biografia: 'Cannavaro destacó por ser un clásico futbolista italiano: rápido, corpulento y además táctico. Responsable de llevar a Italia a levantar la Copa del Mundo en Alemania',
      img: 'assets/img/jugadores/cannavaro06.jpg'
    },
    {
      nombre: 'David Villa',
      nacionalidad: 'España',
      nacimiento: '1981-12-03',
      clubes: 'Valencia, Barcelona y Atlético de Madrid',
      // tslint:disable-next-line:max-line-length
      biografia: 'Villa ya era un buen jugador antes de la Copa del Mundo Sudáfrica 2010, pero sin duda dio el salto hacia el Olimpo al conquistar el título, guiando a la Selección Española',
      img: 'assets/img/jugadores/villa10.jpg'
    },
    {
      nombre: 'Mesut Ozil',
      nacionalidad: 'Alemania',
      nacimiento: '1988-10-15',
      clubes: 'Real Madrid y Arsenal',
      // tslint:disable-next-line:max-line-length
      biografia: 'Ozil destacó entre la gran camada de jugadores de Alemania en 2010, entre él y Khedira lideraron a los teutones a las semifinales donde cayeron con España',
      img: 'assets/img/jugadores/ozil10.jpg'
    },
    {
      nombre: 'Mario Götze',
      nacionalidad: 'Alemania',
      nacimiento: '1992-06-03',
      clubes: 'Borussia Dortmund y Bayern Munich',
      // tslint:disable-next-line:max-line-length
      biografia: 'Götze fue el jugador que marcó el gol del triunfo en la final de Alemania vs Argentina. Gracias a su desmarque aquella jugada terminó en festejo de los teutones',
      img: 'assets/img/jugadores/gotze14.jpg'
    },
    {
      nombre: 'Lionel Messi',
      nacionalidad: 'Argentina',
      nacimiento: '1987-06-24',
      clubes: 'Barcelona',
      // tslint:disable-next-line:max-line-length
      biografia: 'Para muchos el mejor jugador del mundo. Tras disputar su tercer mundial, Messi destacó y se quedó a un paso de darle el campeonato mundial a su país y pasar a la historia',
      img: 'assets/img/jugadores/messi14.jpg'
    },
    {
      nombre: 'Cristiano Ronaldo',
      nacionalidad: 'Portugal',
      nacimiento: '1985-02-05',
      clubes: 'Sporting de Lisboa, Manchester United y Real Madrid',
      // tslint:disable-next-line:max-line-length
      biografia: 'Junto con Messi, considerado el mejor jugador del planeta. A la par del argentino, buscarán darle un campeonato del mundo a su país, en lo que probablemente sea su último mundial de futbol',
      img: 'assets/img/jugadores/cristiano18.jpg'
    },
    {
      nombre: 'Mohamed Salah',
      nacionalidad: 'Egipto',
      nacimiento: '1992-06-15',
      clubes: 'Fiorentina, Roma y Liverpool',
      // tslint:disable-next-line:max-line-length
      biografia: 'El egipcio está llamado a ser una de las grandes joyas del futbol mundial. Su ascenso se dio desde su pase al Liverpool donde fue campeón goleador de la Liga Premier',
      img: 'assets/img/jugadores/salah18.jpg'
    },

  ];

  constructor() {
    console.log('Jugadores Service listo');

  }

  getJugadores() {
    return this.jugadores;
  }

  getJugador(id) {
    return this.jugadores[id];
  }
}

export interface Jugador {
  nombre: string;
  nacionalidad: string;
  nacimiento: string;
  clubes: string;
  biografia: string;
  img: string;
}
