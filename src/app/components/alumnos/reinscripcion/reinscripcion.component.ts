import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reinscripcion',
  templateUrl: './reinscripcion.component.html',
  styleUrls: ['./reinscripcion.component.css']
})
export class ReinscripcionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirmar(){
    Swal.fire({
      icon: 'success',
      title: 'Prueba',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
