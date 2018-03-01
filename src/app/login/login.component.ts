import { Component, OnInit } from '@angular/core';
import { User } from './modal/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user: any={};
  constructor(public router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/show']);
  }

  }
login(){
  console.log(this.user);
  localStorage.setItem('isLoggedin', 'true');
  this.router.navigate(['/show']);
}
}
