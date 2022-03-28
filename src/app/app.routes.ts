import { RouterModule, Routes } from "@angular/router";
import { EquiposComponent } from "./pages/equipos/equipos.component";
import { HomeComponent } from "./pages/home/home.component";
import { TemporadaComponent } from "./pages/temporada/temporada.component";
import { HeaderComponent } from "./shared/header/header.component";





const APP_ROUTES: Routes = [
  
  { path: 'Header', component: HeaderComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'Equipos', component: EquiposComponent},
  { path: 'Temporada', component: TemporadaComponent},
  
  { path: '**', pathMatch: 'full', redirectTo: 'Home'}
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);
