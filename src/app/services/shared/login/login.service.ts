import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private appConfig: AppConfig) { }
  iniciarSesion(correo: string, contrasena: string): Observable<any> {
    const body = {
      email: correo,
      pass: contrasena
    };
    return this.http.post(this.appConfig.URL + 'api/login', body);
  }

  recuperarPass(correo: string): Observable <any> {
    const body = {
      email: correo
    };
    return this.http.post(this.appConfig.URL + 'api/login/recover', body);
  }
}


