import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../AuthenticationServices/authentication.service';
import { UserService } from '../UserServices/user.service';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  errorMessage: string;

  showError: boolean;
  
  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private usersService: UsersService
    ) { }

  ngOnInit() {
  }

  async onSignup(signupFormData: NgForm){
    
    // this.authService.signup(signupFormData.value.email, signupFormData.value.password).then((userInfo) => {
    //     // Register the new user
    //     console.log(userInfo);
        
    //     const user: User = {
    //       email: signupFormData.value.email,
    //       name: signupFormData.value.name, 
    //       mobile:signupFormData.value.mobile,
    //       uid: userInfo.user.uid,
    //       image: '',  
    //       friendcount: 0
    //     }
    //     this.writeNewUser(user);
    // }).catch((error) => {
    //     this.showError = true;
    //     this.errorMessage = error.message;
    //     console.error(error);
    // });
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
      // this.writeNewUser(user);
      this.createUser(signupFormData, user);
  }).catch((error) => {
      this.showError = true;
      this.errorMessage = error.message;
      console.error(error);
  });
    
    
  }

  async createUser(signupFormData: NgForm, user:User){
    await this.usersService.create({ ...user }, user.uid)
    signupFormData.reset();
  }

  private writeNewUser(user: User): void {
    console.log(user);
    this.userService.addUser(user);
  }

}
