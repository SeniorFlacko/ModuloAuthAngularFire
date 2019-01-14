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

  constructor(private authService: AuthenticationService,
    private userService: UserService) { }

  ngOnInit() {
  }

  onSignup(signupFormData): void {
    this.authService.signup(signupFormData.value.email, signupFormData.value.password).then((userInfo) => {
        // Register the new user
        const user: User = new User(signupFormData.value.email,
            signupFormData.value.name, signupFormData.value.mobile, userInfo.uid, 0, '');
        this.writeNewUser(user);
    }).catch((error) => {
        // this.showError = true;
        // this.errorMessage = error.message;
        console.error(error);
    });
  }

  private writeNewUser(user: User): void {
    this.userService.addUser(user);
  }

}
