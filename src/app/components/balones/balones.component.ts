import { Component, OnInit } from '@angular/core';
import { BalonesService, Balon } from '../../services/balones.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-balones',
  templateUrl: './balones.component.html'
})
export class BalonesComponent implements OnInit {

   balones: Balon[] = [];


  constructor(
    private _balonesService: BalonesService,
    private _router: Router

  ) {

   }

  ngOnInit() {
    this.balones = this._balonesService.getBalones();
    console.log(this.balones);
  }

  verBalon(idx: number) {
    this._router.navigate(['/balon', idx]);
  }


}
