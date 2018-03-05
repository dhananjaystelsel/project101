import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent  } from "./login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgotpwdComponent } from "./forgotpwd/forgotpwd.component";
import { SetPwdComponent } from "./set-pwd/set-pwd.component";

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },{
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'fwdpwd',
    component:ForgotpwdComponent
  },
  {
    path:'setPassword',
    component:SetPwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
