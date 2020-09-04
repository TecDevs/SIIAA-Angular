import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';
import { Observable } from 'rxjs';
import { Personal } from '../../models/personal.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor( private http: HttpClient, private appConfig: AppConfig ) { }

  getPersonal(): Observable<Personal[]> {
    return this.http.get<Personal[]>(`${this.appConfig.URL}api/rh/personal`);
  }
}

