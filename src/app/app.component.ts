import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/AuthenticationServices/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myamigos';
  authenticationService: AuthenticationService;
  constructor(private authService: AuthenticationService, private router: Router){
    this.authenticationService = authService;
  }

  onLogout(): void {
    this.authService.signout().then(() => {
      this.router.navigateByUrl('app-friends-login');
      console.log('Bye...!');
    });
  }
}
