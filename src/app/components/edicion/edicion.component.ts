import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EdicionesService } from '../../services/ediciones.service';



@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styles: []
})
export class EdicionComponent  {

  edicion: any = {

  };
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ediciones: EdicionesService
  ) {
    this._activatedRoute.params.subscribe( params => {
      this.edicion = this._ediciones.getEdicion(params['id']);
      console.log(this.edicion);
    });

  }



}
