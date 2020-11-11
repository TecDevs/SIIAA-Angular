import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Registro } from 'src/app/models/registro.model';
import { RegistroService } from '../../../services/shared/registro/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public formRegistro: FormGroup;
  registroGeneral: Registro[];

  constructor(
    public formBuilder: FormBuilder,
    public registroService: RegistroService,
  ) {

    this.formRegistro = formBuilder.group({
      nombre: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      colonia: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      numInt: ['', [Validators.required]],
      numExt: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      confirmar: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
  }

  registro() {
    if (this.formRegistro.value.contrasena === this.formRegistro.value.confirmar  && this.validarCorreoElectronico(this.formRegistro.value.correo)) {

      this.registroService.registro(this.formRegistro.value).subscribe(
        data => {
          swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Registro correcto'
          });
        },
        err => {
          swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al registrar el juez'
          });
          console.log(err);
        }
      );
    } else {
      swal.fire({
        title: 'Ocurrio un error al registrar',
      });
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
