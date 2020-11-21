import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Registro } from 'src/app/models/registro.model';
import { RegistrarEmpleadoService } from '../../../services/recursos-humanos/registrar-empleado.service';


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
    public registroService: RegistrarEmpleadoService,
  ) {

    this.formRegistro = formBuilder.group({
      nombres: ['', [Validators.required]],
      apellido_paterno: ['', [Validators.required]],
      apellido_materno: ['', [Validators.required]],
      fecha_de_nacimiento: ['', [Validators.required]],
      numero_celular: ['', [Validators.required]],
      codigo_postal: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      colonia: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      num_int: [''],
      num_ext: ['', [Validators.required]],
      correo_electronico: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      token: ['']
    });

  }

  ngOnInit(): void {
  }

  registro() {
    if (this.validarCorreoElectronico(this.formRegistro.value.correo_electronico)) {
      //console.log(this.formRegistro.value.fecha_de_nacimiento);
      this.formRegistro.value.fecha_de_nacimiento = this.formRegistro.value.fecha_de_nacimiento.replace('/', '-');
      //console.log(this.formRegistro.value.fecha_de_nacimiento);
      
      this.registroService.putEmpleados(this.formRegistro.value).subscribe(
        data => {
          console.log(data);
          
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
            text: 'Hubo un error al registrar'
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
