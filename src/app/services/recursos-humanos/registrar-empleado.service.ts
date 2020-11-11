import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';
import { Observable } from 'rxjs';
import { RegistroEmpleados } from '../../models/registroEmpleado.model';

@Injectable({
    providedIn: 'root'
  })
  export class RegistrarEmpleadoService {
  
    constructor( private http: HttpClient, private appConfig: AppConfig ) { }
  
    putEmpleados(body: any): Observable<any> {
      return this.http.put(this.appConfig.URL + 'api/login/token-register', body);
    }
  }