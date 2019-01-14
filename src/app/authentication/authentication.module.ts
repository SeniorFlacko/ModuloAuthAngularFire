import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './AuthenticationServices/authentication.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationService,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
