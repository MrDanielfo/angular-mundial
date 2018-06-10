import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas

import { APP_ROUTING } from './app.routes';


// Servicios

import { BalonesService } from './services/balones.service';
import { CampeonesService } from './services/campeones.service';
import { EdicionesService } from './services/ediciones.service';
import { JugadoresService } from './services/jugadores.service';

// Componentes
import { AppComponent } from './app.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { BalonesComponent } from './components/balones/balones.component';
import { CampeonesComponent } from './components/campeones/campeones.component';
import { EdicionesComponent } from './components/ediciones/ediciones.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BalonComponent } from './components/balon/balon.component';
import { CampeonComponent } from './components/campeon/campeon.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { JugadorComponent } from './components/jugador/jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    BalonesComponent,
    CampeonesComponent,
    EdicionesComponent,
    MenuComponent,
    HomeComponent,
    SearchComponent,
    BalonComponent,
    CampeonComponent,
    EdicionComponent,
    JugadorComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING

  ],
  providers: [
    BalonesService,
    CampeonesService,
    EdicionesService,
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
