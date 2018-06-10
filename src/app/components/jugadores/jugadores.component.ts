import { Component, OnInit } from '@angular/core';
import { JugadoresService, Jugador } from '../../services/jugadores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html'
})
export class JugadoresComponent implements OnInit {

  jugadores: Jugador[] = [];

  constructor(
    private _jugadoresService: JugadoresService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.jugadores = this._jugadoresService.getJugadores();
    console.log(this.jugadores);
  }

  verJugador(idx: number) {
    this._router.navigate(['/jugador', idx]);
  }

}
