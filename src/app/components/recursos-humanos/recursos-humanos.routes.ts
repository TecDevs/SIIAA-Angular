import { Routes } from '@angular/router';
import { AvisosComponent } from './avisos/avisos.component';
import { PersonalComponent } from './personal/personal.component';
import { CumpleaniosComponent } from './cumpleanios/cumpleanios.component';
import { RegistroEmpleadosComponent } from './registro-empleados/registro-empleados.component';
import { RegistroPorTokenComponent } from './registro-por-token/registro-por-token.component';
import { ReportesComponent } from './reportes/reportes.component';
import { REPORTES_ROUTES } from './reportes/reportes.routes';

export const RECURSOS_HUMANOS_ROUTES: Routes = [
    {path: 'avisos', component: AvisosComponent},
    {path: 'personal', component: PersonalComponent },
    {path: 'cumpleanios', component: CumpleaniosComponent },
    {path: 'registro-empleados', component: RegistroEmpleadosComponent},
    {path: 'registro-token', component: RegistroPorTokenComponent},
    {path: 'reportes', component: ReportesComponent,
        children: REPORTES_ROUTES
    },
    {path: '**', pathMatch: 'full', redirectTo: 'avisos'},
    {path: '', pathMatch: 'full', redirectTo: 'avisos'}
];