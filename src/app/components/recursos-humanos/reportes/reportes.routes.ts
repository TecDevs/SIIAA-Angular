import { Routes } from '@angular/router';
import { AvancesComponent } from './avances/avances.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { GraficarResultadosComponent } from './graficar-resultados/graficar-resultados.component';
import { DescargarResultadosComponent } from './descargar-resultados/descargar-resultados.component'
import { AVANCES_ROUTES } from './graficar-resultados/avances.routes'

export const REPORTES_ROUTES: Routes = [
    {
        path: 'avances', component: AvancesComponent,
    },
    { path: 'pendientes', component: PendientesComponent },
    { path: 'graficar-resultados', component: GraficarResultadosComponent,
    children: AVANCES_ROUTES,},
    { path: 'descargar-resultados', component: DescargarResultadosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'avances' },
    { path: '', pathMatch: 'full', redirectTo: 'avances' }
];

