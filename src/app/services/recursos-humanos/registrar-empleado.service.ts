import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';
import { Observable } from 'rxjs';
import { RegistroEmpleados } from '../../models/registroEmpleado.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrarEmpleadoService {
  constructor(private http: HttpClient, private appConfig: AppConfig) { }

  registroEmpleados(body: any): Observable<any> {
    return this.http.post(this.appConfig.URL + 'api/empleados/new', body);
  }
  registroDeAlumnos(body: any): Observable<any> {
    return this.http.post(this.appConfig.URL + 'api/alumnos/new', body);
  }
}
