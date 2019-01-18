import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuhtenticationGuard } from '../auhtentication.guard';

const routes: Routes = [
  {path: '', component: UserProfileComponent, canActivate: [AuhtenticationGuard]},
  {path: 'app-friends-userprofile', component: UserProfileComponent, canActivate: [AuhtenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
