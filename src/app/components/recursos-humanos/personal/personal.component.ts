import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../../services/recursos-humanos/personal.service';
import { Personal } from '../../../models/personal.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personal: Personal[];
  constructor( private personalService: PersonalService ) { 
    this.personal = new Array<Personal>();
  }

  ngOnInit(): void {
    this.personalService.getPersonal()
          .subscribe( data => {
            console.log(data);
            this.personal = data;
        });
  }

}
