import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   user:any={};
  constructor(private router:Router) { }

  ngOnInit() {
  }
  signUp(){
    console.log(this.user)
    alert("Success! You can login!");
    this.router.navigate(['/login']);
  }
}
