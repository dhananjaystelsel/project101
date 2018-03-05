import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { SetPwdComponent } from './set-pwd/set-pwd.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [LoginComponent, SignUpComponent, ForgotpwdComponent, SetPwdComponent]
})
export class LoginModule { }
