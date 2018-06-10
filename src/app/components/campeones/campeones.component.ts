import { Component, OnInit } from '@angular/core';
import { CampeonesService, Campeon } from '../../services/campeones.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html'
})
export class CampeonesComponent implements OnInit {

  campeones: Campeon[] = [
  ];

  constructor(
    private _campeonesService: CampeonesService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.campeones = this._campeonesService.getCampeones();
    console.log(this.campeones);
  }

  verCampeon(idx: number) {
    this._router.navigate(['/campeon', idx]);
  }

}
