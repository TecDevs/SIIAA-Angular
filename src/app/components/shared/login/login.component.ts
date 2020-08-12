import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/shared/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  iniciarSesion(correo: string, contrasena: string): any {
    correo = correo.trim();
    contrasena = contrasena.trim();
    if (correo.length > 0 && contrasena.length > 0) {
      if (this.validarCorreoElectronico(correo)) {
        this.loginService.iniciarSesion(correo, contrasena)
          .subscribe(data => {
            console.log(data);
            if (data.statusText === 'OK') {
              if ( data.body.error ){
                switch (data.body.error) {
                  case 'Password':
                    alert('Contraseña incorrecta');
                    break;
                  case 'Account':
                    alert('No se encontro tu cuneta');
                    break;
                  default:
                    break;
                }
              } else {
                this.guardarSesion(data.body);
                console.log(data.body);
                this.router.navigateByUrl('inicio');
              }
            }
          });
      } else {
        alert('Ingrese un correo valido');
      }
    } else {
      alert('Verifique los campos');
    }
  }
  guardarSesion( data: any ): any {
    sessionStorage.setItem('sesion', 'true');
    sessionStorage.setItem('datos', data );
  }
  validarCorreoElectronico(correo: string): boolean {
    const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexCorreo.test(correo) || correo.length > 60) {
      return false;
    }
    return true;
  }

}
