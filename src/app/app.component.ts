import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SIIAA';
  login = false;


  constructor(private router: Router) {}
  ngOnInit(): void {
  if (localStorage.getItem('info-log')) {
    this.login = true;
  }
  if (this.login) {
    this.router.navigateByUrl('/home');
  }
  if (!this.login) {
    this.router.navigateByUrl('/login');
  }
  }
}
