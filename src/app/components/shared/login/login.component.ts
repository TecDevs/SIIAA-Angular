import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/shared/login/login.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  iniciarSesion(correo: string, contrasena: string, recordad: any): any {
    console.log(recordad);
    
    if (recordad === true) {
      correo = correo.trim();
      contrasena = contrasena.trim();
      if (correo.length > 0 && contrasena.length > 0) {
        if (this.validarCorreoElectronico(correo)) {
          this.loginService.iniciarSesion(correo, contrasena).subscribe(
            data => {
              if (data === 'Contrasena incorrecta') {
                swal.fire('Contraseña incorrecta', 'error');
              } else if (data === 'Usuario no encontrado') {
                swal.fire('Este usuario no se encuentra registrado', 'error');
              } else {
                this.router.navigateByUrl('inicio');
                localStorage.setItem('info-log', JSON.stringify(data));
              }
            },
            err => {
              console.log(err);
            });
        } else {
          alert('Ingrese un correo valido');
        }
      } else {
        alert('Verifique los campos');
      }
    } else {
      correo = correo.trim();
      contrasena = contrasena.trim();
      if (correo.length > 0 && contrasena.length > 0) {
        if (this.validarCorreoElectronico(correo)) {
          this.loginService.iniciarSesion(correo, contrasena).subscribe(
            data => {
              if (data === 'Contrasena incorrecta') {
                swal.fire({
                  title: 'Contraseña incorrecta',
                  icon: 'error'
                });
              } else if (data === 'No existe') {
                swal.fire({
                  title: 'Este usuario no se encuentra registrado',
                  icon: 'error'
                });
              } else {
                this.router.navigateByUrl('inicio');
              }
            },
            err => {
              console.log(err);
            });
        } else {
          alert('Ingrese un correo valido');
        }
      } else {
        alert('Verifique los campos');
      }
    }

  }
  guardarSesion(data: any): any {
    sessionStorage.setItem('sesion', 'true');
    sessionStorage.setItem('datos', data);
  }
  validarCorreoElectronico(correo: string): boolean {
    const regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexCorreo.test(correo) || correo.length > 60) {
      return false;
    }
    return true;
  }

}
