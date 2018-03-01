import { Component, OnInit } from '@angular/core';
import { User } from './modal/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user: User;
  constructor() { }

  ngOnInit() {

  }
login(){
  console.log(this.user);
}
}
