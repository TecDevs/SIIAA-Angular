import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrarEmpleadoService } from '../../../services/recursos-humanos/registrar-empleado.service'

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css']
})
export class RegistroEmpleadosComponent implements OnInit {
  public formsRegistroEmpleados: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registroEmpleados: RegistrarEmpleadoService) {
      this.formsRegistroEmpleados = formBuilder.group({
        area: ['', [Validators.required]],
        nombres: ['', [Validators.required]],
        a_paterno: ['', [Validators.required]],
        a_materno: ['', [Validators.required]],
        fecha_de_nacimiento: ['', [Validators.required]],
        celular: ['',[Validators.required]],
        cp: ['', [Validators.required]],
        ciudad: ['', [Validators.required]],
        municipio: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        colonia: ['', [Validators.required]],
        calle:  ['', [Validators.required]],
        numInt: [''],
        numExt: ['', [Validators.required]],
        correo: ['', [Validators.required]],
        contrasena: ['', [Validators.required]]
      });
   }

  ngOnInit(): void {
  }

  registrarEmpleado() {  
    console.log(this.formsRegistroEmpleados.value);
    this.registroEmpleados.putEmpleados(this.formsRegistroEmpleados.value).subscribe(
      res => {
        console.log(res);
        console.log("agregado con exito");
        this.formsRegistroEmpleados.reset();
        
      },
      err => {
        console.log("error al agregar");
        console.log(err);
      }
    );

}
}
