import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './AuthenticationServices/authentication.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordEqualValidator } from './Directives/password-equal-validators.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignUpComponent, 
    PasswordEqualValidator,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ],
  providers:[
    AuthenticationService
  ]
})
export class AuthenticationModule { }
