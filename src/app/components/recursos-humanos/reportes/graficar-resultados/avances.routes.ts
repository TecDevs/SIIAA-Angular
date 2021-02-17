import { Routes } from '@angular/router';
import { GraficarAreasComponent } from './graficar-areas/graficar-areas.component';
import { GraficarTotalComponent } from './graficar-total/graficar-total.component';


export const AVANCES_ROUTES: Routes = [
    {path: 'graficar-areas', component: GraficarAreasComponent},
    {path: 'graficar-total', component: GraficarTotalComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'graficar-areas'},
    {path: '', pathMatch: 'full', redirectTo: 'graficar-areas'}
];
