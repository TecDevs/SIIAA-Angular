import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  url: string;
  constructor( private http: HttpClient ) {
    this.url = 'http://mante.hosting.acm.org/SIIAA-API/public/';
  }

  saveReplys(bloque: string, idArea: number, valorRespuesta: number, pregunta: string): Observable<any>{
    const body = {
      bloque,
      id_area: idArea,
      valor_respuesta: valorRespuesta,
      pregunta
    };
    return this.http.post(this.url + 'api/encuestas/guardar-resultados', body);
  }

  getBloques(idUsuarios: number): Observable<any>{
    const body = {
      id_usuarios: idUsuarios
    };
    return this.http.post(this.url + 'api/encuestas/obtener-bloques', body);
  }

  saveProgress(idUsaurios: number, bloque: string): Observable<any>{
    const body = {
      id_usuarios: idUsaurios,
      bloque
    };
    return this.http.post(this.url + 'api/encuestas/registro-progreso', body);
  }
}

