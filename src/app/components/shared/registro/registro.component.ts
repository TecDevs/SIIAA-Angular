import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Registro } from 'src/app/models/registro.model';
import { RegistrarEmpleadoService } from '../../../services/recursos-humanos/registrar-empleado.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public formRegistro: FormGroup;
  public formRegistroAlumnos: FormGroup;
  registroGeneral: Registro[];

  constructor(
    public formBuilder: FormBuilder,
    public registroService: RegistrarEmpleadoService,
  ) {

    this.formRegistro = formBuilder.group({
      nombres: ['', [Validators.required]],
      apellido_paterno: ['', [Validators.required]],
      apellido_materno: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      fecha_de_nacimiento: ['', [Validators.required]],
      lugar_nacimiento: ['', [Validators.required]],
      numero_celular: ['', [Validators.required]],
      tel_fijo: ['', [Validators.required]],
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

    this.formRegistroAlumnos = formBuilder.group({
      id_carreras: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      nss: ['', [Validators.required]],
      tipo_sangre: ['', [Validators.required]],
      tutor: ['', []],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      c_contrasena: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      ape_pat: ['', [Validators.required]],
      ape_mat: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      fecha_nacimiento: ['', [Validators.required]],
      lugar_nacimiento: ['', [Validators.required]],
      tel_fijo: ['', []],
      tel_cel: ['', []],
      codigo_postal: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      colonia: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      num_ext: ['', []],
      num_int: ['', []],
    });

  }

  ngOnInit(): void {
  }

  registro(): void {
    if (this.formRegistro.get('token').value !== '') {
      if (this.validarCorreoElectronico(this.formRegistro.value.correo_electronico)) {
        this.formRegistro.value.fecha_de_nacimiento = this.formRegistro.value.fecha_de_nacimiento.replace('/', '-');
        this.registroService.registroEmpleados(this.formRegistro.value).subscribe(
          data => {
            console.log(data);
            Swal.fire('Información', data.message, 'info');
          }, err => console.log(err));
        console.log(this.formRegistro.value);
      } else {
        swal.fire('Ciudaddo', 'verifica el correo electronico', 'info');
      }
    } else {
      Swal.fire('Cuidado', 'Ingresa el código', 'info');
    }
  }

  registroAlumnos(): void {
    console.log(this.formRegistroAlumnos.value);
    if (this.formRegistroAlumnos.value.contrasena === this.formRegistroAlumnos.value.c_contrasena) {
      this.registroService.registroDeAlumnos(this.formRegistroAlumnos.value)
        .subscribe(data => {
          console.log(data);
          if (!data.error) {
            Swal.fire({
              title: 'Alumno registrado',
              icon: 'info'
            });
          } else {
            console.log(data);
            Swal.fire({
              title: 'Error',
              icon: 'info',
              text: data.message
            });
          }
        }, err => console.log(err));
    } else {
      swal.fire({
        icon: 'warning',
        title: 'Contrasena incorrecta'
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
