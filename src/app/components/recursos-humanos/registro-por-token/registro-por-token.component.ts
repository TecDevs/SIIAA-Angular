import { Component, OnInit } from '@angular/core';
import { RecursosHumanosService } from '../../../services/recursos-humanos/recursos-humanos.service';

@Component({
  selector: 'app-registro-por-token',
  templateUrl: './registro-por-token.component.html',
  styleUrls: ['./registro-por-token.component.css']
})
export class RegistroPorTokenComponent implements OnInit {
  token: string;
  constructor(private recursosHumanosService: RecursosHumanosService) { }

  ngOnInit(): void {
  }

  generarToken(correo: string, area: string): any {
    if (correo.length > 0 && area !== 'Seleccione un area...') {
      if (this.validarCorreoElectronico(correo)) {
        area = area.toLowerCase();
        this.recursosHumanosService.generarToken(correo, area)
          .subscribe((data) => {
            if (data.statusText === 'OK') {
              if (data.body.error) {
                alert(data.body.error);
              } else {
                this.token = data.body.token;
                alert(data.body.exito);
              }
            }
          });
      } else{
        alert('Correo electronico invalido');
      }
    } else {
      alert('rellene bien los datos');
    }
  }
  validarCorreoElectronico(correo: string): boolean {
    const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexCorreo.test(correo) || correo.length > 60) {
      return false;
    }
    return true;
  }
}
