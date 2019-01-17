import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication/AuthenticationServices/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuhtenticationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const isLoggedIn: boolean = this.authService.isAuthenticated();
      
      if(!isLoggedIn){
        this.router.navigateByUrl('/app-friends-login');
      }

      return isLoggedIn;
  }
}
