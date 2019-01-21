import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../UserServices/user.service';
import { AuthenticationService } from '../AuthenticationServices/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-friends-login',
    styleUrls: ['login.component.scss'],
    templateUrl: 'login.component.html',
})
export class LoginComponent {

    errorMessage: string;

    showError: boolean;

    private user: User;

    constructor(private userService: UserService,
                private router: Router,
                private authService: AuthenticationService,
                private angularFireAuth: AngularFireAuth) {
        this.angularFireAuth.auth.onAuthStateChanged(user => {
            if (user) {
                this.getUserInfo(user.uid);
            }
        });
    }

    navigateToUserProfile(): any {
        this.router.navigateByUrl('/app-friends-userprofile');
    }
    
    onLogin(loginFormData): void {
        this.authService.login(loginFormData.value.email, loginFormData.value.password).then((user) => {
            // Login user
            console.log(user);
            const uid: string = user.uid;
            this.userService.getUser(uid).subscribe(snapshot => {
                this.user = snapshot;
                console.log(`El usuario existe en la base de datos... `, this.user);
                
                this.userService.saveUser(this.user);
                //Firebase session lifecycle: 
                //If User clears browsing history
                //If User changes the password
                //If User sign out
                // this.navigateToUserProfile();
                this.router.navigateByUrl('/app-friends-userprofile');
            });
        }).catch((error) => {
            this.errorMessage = error.message;
            this.showError = true;
        });
    }

    onReset(resetFormData): void {
        this.authService.resetPassword(resetFormData.value.email).then(() => {
            alert('Reset instruction sent to your mail');
        }).catch((error) => {
            this.errorMessage = error.message;
            this.showError = true;
        });
    }

    private getUserInfo(uid: string) {
        this.userService.getUser(uid).subscribe(snapshot => {
            this.user = snapshot;
            console.log(`El usuario existe en la base de datos... `, snapshot);
            this.userService.saveUser(this.user);
            //Firebase session lifecycle: 
            //If User clears browsing history
            //If User changes the password
            //If User sign out
            this.navigateToUserProfile();
        });
    }
}


