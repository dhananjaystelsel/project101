import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('isLoggedin')) {
        this.router.navigate(['/show']);
    }
}
  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
}
}
