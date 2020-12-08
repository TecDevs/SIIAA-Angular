import { Routes } from '@angular/router';

import { LoginComponent } from './components/shared/login/login.component';
import { RegistroComponent } from './components/shared/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/shared/home/home.component';
import { INICIO_ROUTES } from './components/inicio/inicio.routes';
import { ReinscripcionComponent } from './components/reinscripcion/reinscripcion.component'
export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent,
    children: INICIO_ROUTES
},
{ path:'reinscripcion', component: ReinscripcionComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

