import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampeonesService } from '../../services/campeones.service';


@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html',
  styles: []
})
export class CampeonComponent {

  campeon: any = {

  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _campeones: CampeonesService
  ) {

    this._activatedRoute.params.subscribe( params => {
      this.campeon = this._campeones.getCampeon(params['id']);
      console.log(this.campeon);
    });
  }


}
