import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BalonesService } from '../../services/balones.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  balones: any[] = [];
  termino: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _balones: BalonesService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.balones = this._balones.buscarCosa(params['termino']);
      console.log(this.balones);
    });
  }

  verBalon(idx: number) {
    this._router.navigate(['/balon', idx]);
  }


}
