import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './notfound/page-not-found.component';

const routes: Routes = [
  { path: 'app-friends-about', component: AboutComponent},
  { path: 'app-friends-page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
