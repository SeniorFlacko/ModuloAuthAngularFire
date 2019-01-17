import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { EditDialogComponent } from 'src/app/edit-dialog/edit-dialog.component';
import { AuthenticationService } from 'src/app/authentication/AuthenticationServices/authentication.service';
import { UserService } from 'src/app/authentication/UserServices/user.service';
import { Router } from '@angular/router';
import { EditType } from 'src/app/edit-dialog/edit-detail';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profileImage: any = 'http://lorempixel.com/200/200/business/';

  user: User;

  @ViewChild(EditDialogComponent) editDialog: EditDialogComponent;

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
      this.user = this.userService.getSavedUser().getValue();
  }

  onLogout(): void {
      this.authService.signout().then(() => {
          this.navigateToLogin();
      });
  }

  navigateToLogin() {
      this.router.navigateByUrl('/app-friends-login');
  }

  onNameChange() {
      this.editDialog.setTitle('Do you want to edit name?')
          .setBodyTitle('name')
          .setBodyLabel('Enter new name')
          .setEditType(EditType.NAME)
          .show();
  }

  onEmailChange() {
      this.editDialog.setTitle('Do you want to edit email?')
          .setBodyTitle('email')
          .setBodyLabel('Enter new email')
          .setEditType(EditType.EMAIL)
          .show();
  }

  onMobileChange() {
      this.editDialog.setTitle('Do you want to edit mobile?')
          .setBodyTitle('mobile')
          .setBodyLabel('Enter new mobile')
          .setEditType(EditType.MOBILE)
          .show();
  }

  onPasswordChange() {
      this.editDialog.setTitle('Do you want to edit password?')
          .setBodyTitle('password')
          .setBodyLabel('Enter new password')
          .setEditType(EditType.PASSWORD)
          .show();
  }

}
