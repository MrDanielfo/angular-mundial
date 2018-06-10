import { Component } from '@angular/core';
/* este es el localizador de parámetros */
import { ActivatedRoute } from '@angular/router';
import { BalonesService } from '../../services/balones.service';


@Component({
  selector: 'app-balon',
  templateUrl: './balon.component.html',
  styles: []
})
export class BalonComponent  {
    balon: any = {};
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _balones: BalonesService
  ) {
    this._activatedRoute.params.subscribe( params => {
      this.balon = this._balones.getBalon(params['id']);
      console.log(this.balon);
    });
  }



}
