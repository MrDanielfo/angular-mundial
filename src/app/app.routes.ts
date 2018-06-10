import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BalonesComponent } from './components/balones/balones.component';
import { BalonComponent } from './components/balon/balon.component';
import { EdicionesComponent } from './components/ediciones/ediciones.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { CampeonesComponent } from './components/campeones/campeones.component';
import { CampeonComponent } from './components/campeon/campeon.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'balones', component: BalonesComponent },
  { path: 'balon/:id', component: BalonComponent },
  { path: 'ediciones', component: EdicionesComponent },
  { path: 'edicion/:id', component: EdicionComponent },
  { path: 'campeones', component: CampeonesComponent },
  { path: 'campeon/:id', component: CampeonComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugador/:id', component: JugadorComponent },
  { path: 'busqueda/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
