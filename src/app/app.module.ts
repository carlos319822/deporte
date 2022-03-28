import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { EquiposService } from './servicios/equipos.service';
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { TemporadaComponent } from './pages/temporada/temporada.component';


import { TemporadaService } from './servicios/temporada.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EquiposComponent,
    HomeComponent,
    TemporadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    EquiposService,
    TemporadaService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
