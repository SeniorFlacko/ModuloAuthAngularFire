import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './AuthenticationServices/authentication.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordEqualValidator } from './Directives/password-equal-validators.directive';
import { FormsModule } from '@angular/forms';
import { ErrorAlertComponent } from '../shared/error-alert/error-alert.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './UserServices/user.service';

@NgModule({
  declarations: [
    SignUpComponent, 
    PasswordEqualValidator,
    ErrorAlertComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
  ],
  providers:[
    AuthenticationService,
    UserService
  ]
})
export class AuthenticationModule { }
