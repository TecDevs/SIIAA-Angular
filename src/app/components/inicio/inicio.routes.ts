import { Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { ActualizarInfoComponent } from '../perfil/actualizar-info/actualizar-info.component';
import { SubirArchivosComponent } from '../perfil/subir-archivos/subir-archivos.component';
import { ClimaLaboralComponent } from '../encuestas/clima-laboral/clima-laboral.component';
import { RecursosHumanosComponent } from '../recursos-humanos/recursos-humanos.component';
import { RECURSOS_HUMANOS_ROUTES } from '../recursos-humanos/recursos-humanos.routes';
import { ConfiguracionComponent } from '../shared/configuracion/configuracion/configuracion.component';
import { CoordinadorComponent } from '../coordinador/coordinador.component';
import { PerfilAlumnoComponent } from '../alumnos/perfil-alumno/perfil-alumno.component';
import { EncuestasAlumnoComponent } from '../alumnos/encuestas-alumno/encuestas-alumno.component'  
import { ExtraescolaresAlumnoComponent } from '../alumnos/extraescolares-alumno/extraescolares-alumno.component'
import { ServicioAlumnoComponent } from '../alumnos/servicio-alumno/servicio-alumno.component'
import { CursoOfimaticaAlumnoComponent } from '../alumnos/curso-ofimatica-alumno/curso-ofimatica-alumno.component'
import { ResidenciasAlumnoComponent } from '../alumnos/residencias-alumno/residencias-alumno.component'

export const INICIO_ROUTES: Routes = [
    {path: 'principal', component: PrincipalComponent},
    {path: 'actualizar-info', component: ActualizarInfoComponent},
    {path: 'subir-archivos', component: SubirArchivosComponent},
    {path: 'clima-laboral', component: ClimaLaboralComponent},
    {path: 'configuracion', component: ConfiguracionComponent},
    {path: 'recursos-humanos', component: RecursosHumanosComponent,
    children: RECURSOS_HUMANOS_ROUTES
    },
    {path: 'coordinador', component: CoordinadorComponent},

    // alumnos
    {path: 'perfilalumno', component: PerfilAlumnoComponent },
    {path: 'encuestasalumno', component: EncuestasAlumnoComponent },
    {path: 'extraescolares', component: ExtraescolaresAlumnoComponent },
    {path: 'serviciosocial', component: ServicioAlumnoComponent },
    {path: 'cursoofimatica', component: CursoOfimaticaAlumnoComponent },
    {path: 'residencias', component: ResidenciasAlumnoComponent },


    {path: '**', pathMatch: 'full', redirectTo: 'principal'}
];