import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AuhtenticationGuard } from '../auhtentication.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    AuhtenticationGuard
  ]
})
export class UserModule { }
