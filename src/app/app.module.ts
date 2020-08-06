import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistroComponent } from './components/shared/registro/registro.component';
import { CalendarioComponent } from './components/shared/calendario/calendario.component';
import { NotasComponent } from './components/shared/notas/notas.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActualizarInfoComponent } from './components/perfil/actualizar-info/actualizar-info.component';
import { SubirArchivosComponent } from './components/perfil/subir-archivos/subir-archivos.component';
import { ClimaLaboralComponent } from './components/encuestas/clima-laboral/clima-laboral.component';
import { RegistroEmpleadosComponent } from './components/recursos-humanos/registro-empleados/registro-empleados.component';
import { RegistroPorTokenComponent } from './components/recursos-humanos/registro-por-token/registro-por-token.component';
import { CumpleaniosComponent } from './components/recursos-humanos/cumpleanios/cumpleanios.component';
import { AvisosComponent } from './components/recursos-humanos/avisos/avisos.component';
import { PersonalComponent } from './components/recursos-humanos/personal/personal.component';
import { AvancesComponent } from './components/recursos-humanos/reportes/avances/avances.component';
import { PendientesComponent } from './components/recursos-humanos/reportes/pendientes/pendientes.component';
import { GraficarResultadosComponent } from './components/recursos-humanos/reportes/graficar-resultados/graficar-resultados.component';
import { DescargarResultadosComponent } from './components/recursos-humanos/reportes/descargar-resultados/descargar-resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    CalendarioComponent,
    NotasComponent,
    SidebarComponent,
    InicioComponent,
    ActualizarInfoComponent,
    SubirArchivosComponent,
    ClimaLaboralComponent,
    RegistroEmpleadosComponent,
    RegistroPorTokenComponent,
    CumpleaniosComponent,
    AvisosComponent,
    PersonalComponent,
    AvancesComponent,
    PendientesComponent,
    GraficarResultadosComponent,
    DescargarResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
