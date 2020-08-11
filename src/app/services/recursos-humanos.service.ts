import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosHumanosService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string, body: any ): Observable<any>{
    const url = `http://mante.hosting.acm.org/SIIAA_backend/${ query }`;
    const request = new HttpRequest('POST', url, JSON.stringify(body));
    return this.http.request(request);
  }

  generarToken( correo: string, area: string ): Observable<any>{
    const body = {
      correo,
      area
    };
    console.log(body);
    return this.getQuery( 'negocios/php/RH/Registro_por_token/generar_token.php', body);
  }
}
