import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { User } from '../modal/user';
@Component({
  selector: 'app-set-pwd',
  templateUrl: './set-pwd.component.html',
  styleUrls: ['./set-pwd.component.css']
})
export class SetPwdComponent implements OnInit {
  
 user=new User();
 alerttopright;
 alerttop;

  constructor(private router:Router) {
    $(function(){
      $(".myadmin-alert .closed").click(function(event) {
        $(this).parents(".myadmin-alert").fadeOut(350);
        return false;
    });
    /* Click to close */
    $(".myadmin-alert-click").click(function(event) {
        $(this).fadeToggle(350);
        return true;
    });
   
    })
   }

  ngOnInit() {

  }
  resetPwd(){
    console.log(this.user);
 if(this.user.password === this.user.confirmPassword){
 // this.router.navigate(['/login']); 
  this.alerttop=true;
   
 }
 else{

  this.alerttopright=true;
 
 }
  }
}
