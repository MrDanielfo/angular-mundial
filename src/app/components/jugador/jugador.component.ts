import { Component } from '@angular/core';
import { JugadoresService } from '../../services/jugadores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styles: []
})
export class JugadorComponent {

  jugador: any = {

  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _jugadores: JugadoresService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.jugador = this._jugadores.getJugador(params['id']);
      console.log(this.jugador);
    });
  }

}
