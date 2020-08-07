import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistroComponent } from './components/shared/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ActualizarInfoComponent } from './components/perfil/actualizar-info/actualizar-info.component';
import { SubirArchivosComponent } from './components/perfil/subir-archivos/subir-archivos.component';
import { ClimaLaboralComponent } from './components/encuestas/clima-laboral/clima-laboral.component';
import { PrincipalComponent } from './components/inicio/principal/principal.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent, children: [
    {path: 'principal', component: PrincipalComponent},
    {path: 'actualizar-info', component: ActualizarInfoComponent},
    {path: 'subir-archivos', component: SubirArchivosComponent},
    {path: 'clima-laboral', component: ClimaLaboralComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'principal'}
  ]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

