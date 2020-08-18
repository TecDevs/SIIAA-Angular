import { Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { ActualizarInfoComponent } from '../perfil/actualizar-info/actualizar-info.component';
import { SubirArchivosComponent } from '../perfil/subir-archivos/subir-archivos.component';
import { ClimaLaboralComponent } from '../encuestas/clima-laboral/clima-laboral.component';
import { RecursosHumanosComponent } from '../recursos-humanos/recursos-humanos.component';
import { RECURSOS_HUMANOS_ROUTES } from '../recursos-humanos/recursos-humanos.routes';

export const INICIO_ROUTES: Routes = [
    {path: 'principal', component: PrincipalComponent},
    {path: 'actualizar-info', component: ActualizarInfoComponent},
    {path: 'subir-archivos', component: SubirArchivosComponent},
    {path: 'clima-laboral', component: ClimaLaboralComponent},
    {path: 'recursos-humanos', component: RecursosHumanosComponent,
    children: RECURSOS_HUMANOS_ROUTES
    },
    {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];