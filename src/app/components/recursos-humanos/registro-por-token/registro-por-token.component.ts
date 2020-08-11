import { Component, OnInit } from '@angular/core';
import { RecursosHumanosService } from '../../../services/recursos-humanos.service';

@Component({
  selector: 'app-registro-por-token',
  templateUrl: './registro-por-token.component.html',
  styleUrls: ['./registro-por-token.component.css']
})
export class RegistroPorTokenComponent implements OnInit {

  constructor( private recursosHumanosService: RecursosHumanosService ) { }

  ngOnInit(): void {
  }
  generarToken( correo: string, area: string ){
      area = area.toLowerCase();
      this.recursosHumanosService.generarToken( correo, area )
      .subscribe( (data) => {
        console.log(data);
      });
  }
}
