import { Component, OnInit } from '@angular/core';
import { EdicionesService, Edicion } from '../../services/ediciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ediciones',
  templateUrl: './ediciones.component.html'
})
export class EdicionesComponent implements OnInit {

  ediciones: Edicion[] = [];

  constructor(
    private _edicionesService: EdicionesService,
    private _router: Router

  ) { }

  ngOnInit() {
   this.ediciones = this._edicionesService.getEdiciones();
   console.log(this.ediciones);
  }

  verEdicion(idx: number) {
    this._router.navigate(['/edicion', idx]);
  }

}
