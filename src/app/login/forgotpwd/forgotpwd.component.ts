import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {
 user:any={}
  constructor(private router:Router) { }

  ngOnInit() {
  }
  linkToResetPwd(){
  console.log(this.user);
  this.router.navigateByUrl('/login/setPassword');
  }
}
