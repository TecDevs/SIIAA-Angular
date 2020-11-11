import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../../app/config/app.config';



@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private http: HttpClient, private servicesConfig: AppConfig ) { }
  registro( body: any ): Observable<any> {
    return this.http.post(this.servicesConfig.URL+ '', body);
  }
}
