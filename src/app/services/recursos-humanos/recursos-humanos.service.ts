import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class RecursosHumanosService {

  constructor( private http: HttpClient, private appConfig: AppConfig ) { }

  getQuery( query: string, body: any ): Observable<any>{
    const url = `${this.appConfig.URL}${ query }`;
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
