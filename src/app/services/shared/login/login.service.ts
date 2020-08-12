import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }
  iniciarSesion( correo: string, contrasena: string ): Observable<any>{
    const body = {
      correo,
      contrasena
    };
    const url = `http://mante.hosting.acm.org/SIIAA_backend/negocios/php/shared/login/login.php`;
    const request = new HttpRequest('POST', url, JSON.stringify(body));
    return this.http.request(request);
  }
}

