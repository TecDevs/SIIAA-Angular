import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosHumanosService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string, body: any ): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded'
      }),
    };
    const url = `http://mante.hosting.acm.org/SIIAA_backend/${ query }`;
    return this.http.post(url, body, httpOptions);
  }

  generarToken( correo: string, area: string ): Observable<any>{
    const body = {
      correo,
      area
    };
    console.log(correo +'  /  '+ area);
    return this.getQuery( 'negocios/php/RH/Registro_por_token/generar_token.php', body);
  }
}
