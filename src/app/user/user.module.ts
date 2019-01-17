import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AuhtenticationGuard } from '../auhtentication.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    EditDialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    AuhtenticationGuard
  ]
})
export class UserModule { }
