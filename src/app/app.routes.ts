import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistroComponent } from './components/shared/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ActualizarInfoComponent } from './components/perfil/actualizar-info/actualizar-info.component';
import { SubirArchivosComponent } from './components/perfil/subir-archivos/subir-archivos.component';
import { ClimaLaboralComponent } from './components/encuestas/clima-laboral/clima-laboral.component';
import { PrincipalComponent } from './components/inicio/principal/principal.component';
import { RecursosHumanosComponent } from './components/recursos-humanos/recursos-humanos.component';
import { AvisosComponent } from './components/recursos-humanos/avisos/avisos.component';
import { PersonalComponent } from './components/recursos-humanos/personal/personal.component';
import { RegistroEmpleadosComponent } from './components/recursos-humanos/registro-empleados/registro-empleados.component';
import { RegistroPorTokenComponent } from './components/recursos-humanos/registro-por-token/registro-por-token.component';
import { CumpleaniosComponent } from './components/recursos-humanos/cumpleanios/cumpleanios.component';
import { ReportesComponent } from './components/recursos-humanos/reportes/reportes.component';
import { PendientesComponent } from './components/recursos-humanos/reportes/pendientes/pendientes.component';
import { GraficarResultadosComponent } from './components/recursos-humanos/reportes/graficar-resultados/graficar-resultados.component';
import { DescargarResultadosComponent } from './components/recursos-humanos/reportes/descargar-resultados/descargar-resultados.component';
import { AvancesComponent } from './components/recursos-humanos/reportes/avances/avances.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: InicioComponent,
    children: [
    //RUTAS HIJAS DE INICIO
    {path: 'principal', component: PrincipalComponent},
    {path: 'actualizar-info', component: ActualizarInfoComponent},
    {path: 'subir-archivos', component: SubirArchivosComponent},
    {path: 'clima-laboral', component: ClimaLaboralComponent},
    {path: 'recursos-humanos', component: RecursosHumanosComponent,
      children: [
        //RUTAS HIJAS DE RECURSOS HUMANOS
      {path: 'avisos', component: AvisosComponent},
      {path: 'personal', component: PersonalComponent },
      {path: 'cumpleanios', component: CumpleaniosComponent },
      {path: 'registro-empleados', component: RegistroEmpleadosComponent},
      {path: 'registro-token', component: RegistroPorTokenComponent},
      {path: 'reportes', component: ReportesComponent,
        children: [
          //RUTAS  HIJAS DE /RECURSOS HUMANOS/REPORTES
          {path: 'avances', component: AvancesComponent},
          {path: 'pendientes', component: PendientesComponent},
          {path: 'graficar-resultados', component: GraficarResultadosComponent},
          {path: 'descargar-resultados', component: DescargarResultadosComponent},
          {path: '**', pathMatch: 'full', redirectTo: 'avances'},
          {path: '', pathMatch: 'full', redirectTo: 'avances'}
        ]},
      {path: '**', pathMatch: 'full', redirectTo: 'avisos'},
      {path: '', pathMatch: 'full', redirectTo: 'avisos'}
    ]
  },
    {path: '**', pathMatch: 'full', redirectTo: 'principal'}
  ]
},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

