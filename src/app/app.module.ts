import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routes';
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
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/shared/home/home.component';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/inicio/principal/principal.component';
import { RecursosHumanosComponent } from './components/recursos-humanos/recursos-humanos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportesComponent } from './components/recursos-humanos/reportes/reportes.component';
import { NavbarInicioComponent } from './components/shared/navbar-inicio/navbar-inicio.component';
import { ChartsModule } from 'ng2-charts';
import { GraficarAreasComponent } from './components/recursos-humanos/reportes/graficar-resultados/graficar-areas/graficar-areas.component';
import { GraficarTotalComponent } from './components/recursos-humanos/reportes/graficar-resultados/graficar-total/graficar-total.component';
import { AppConfig } from './config/app.config';
import { ConfiguracionComponent } from './components/shared/configuracion/configuracion/configuracion.component';
import { ReinscripcionComponent } from './components/reinscripcion/reinscripcion.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CoordinadorComponent } from './components/coordinador/coordinador.component';

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
    DescargarResultadosComponent,
    FooterComponent,
    HomeComponent,
    PrincipalComponent,
    RecursosHumanosComponent,
    ReportesComponent,
    NavbarInicioComponent,
    ConfiguracionComponent,
    GraficarAreasComponent,
    GraficarTotalComponent,
    ReinscripcionComponent,
    CoordinadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, { useHash: true } ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
