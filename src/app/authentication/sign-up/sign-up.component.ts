import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../AuthenticationServices/authentication.service';
import { UserService } from '../UserServices/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  errorMessage: string;

  showError: boolean;
  
  constructor(private authService: AuthenticationService,
    private userService: UserService) { }

  ngOnInit() {
  }

  onSignup(signupFormData): void {
    this.authService.signup(signupFormData.value.email, signupFormData.value.password).then((userInfo) => {
        // Register the new user
        console.log(userInfo);
        
        const user: User = {
          email: signupFormData.value.email,
          name: signupFormData.value.name, 
          mobile:signupFormData.value.mobile,
          uid: userInfo.user.uid,
          image: '',  
          friendcount: 0
        }
        this.writeNewUser(user);
    }).catch((error) => {
        // this.showError = true;
        // this.errorMessage = error.message;
        console.error(error);
    });
  }

  private writeNewUser(user: User): void {
    console.log(user);
    this.userService.addUser(user);
  }

}
