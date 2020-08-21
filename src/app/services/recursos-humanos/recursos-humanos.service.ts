import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosHumanosService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string, body: any ): Observable<any>{
    const url = `http://mante.hosting.acm.org/SIIAA-API/public/${ query }`;
    const request = new HttpRequest('POST', url, body);
    return this.http.request(request);
  }

  generarToken( mail: string, area: string ): Observable<any>{
    const body = {
      mail,
      area
    };
    console.log(body);
    return this.getQuery( 'api/rh/token', body);
  }
}
