import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima-laboral',
  templateUrl: './clima-laboral.component.html',
  styleUrls: ['./clima-laboral.component.css']
})
export class ClimaLaboralComponent implements OnInit {
  
  encuesta: any = {};

  numbloque: number;
  constructor( private http: HttpClient ) {
    this.numbloque = 0;
    this.http.get('../../../../assets/encuestas/encuesta.json')
    .subscribe( data => {
      this.encuesta = data;
      console.log(data);
    });
   }
  ngOnInit(): void { }
  activarBloque1(): any{
    this.numbloque = 0;
  }
  activarBloque2(): any{
    this.numbloque = 1;
  }
  activarBloque3(): any{
    this.numbloque = 2;
  }
  activarBloque4(): any{
    this.numbloque = 3;
  }
  activarBloque5(): any{
    this.numbloque = 4;
  }
  activarBloque6(): any{
    this.numbloque = 5;
  }
  activarBloque7(): any{
    this.numbloque = 6;
  }
  activarBloque8(): any{
    this.numbloque = 7;
  }
  activarBloque9(): any{
    this.numbloque = 8;
  }
  activarBloque10(): any{
    this.numbloque = 9;
  }
}
