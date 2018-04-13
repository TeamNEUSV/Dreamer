import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  userId: string;
  username: string;
  email: string;
  currentpassword: string;
  newpassword: string;
  confirmpassword: string;
  firstName: string;
  lastName: string;
  errorFlag: Boolean = false;
  errorMsg: string;

  constructor(private userService: UserService,
              private activatedroute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
        this.userId = params['uid'];
      }
    );
    this.userService.findUserById(this.userId).subscribe(
      res => {
        this.user = res;
        this.username = this.user['username'];
        this.email = this.user['email'];
        this.firstName = this.user['firstName'];
        this.lastName = this.user['lastName'];
        this.currentpassword = this.user['password'];
      }, err => {
        alert('Error!');
      }
    );
  }
    updateProfile() {
      if (this.username.trim().length > 0 && this.username.indexOf(' ') >= 0) {
             this.errorFlag = true;
             this.errorMsg = 'The username cannot include blank space !';
             return;
      }
      if (this.newpassword && this.newpassword.trim().length > 0) {
        if (this.newpassword !== this.confirmpassword) {
          this.errorFlag = true;
          this.errorMsg = 'The confirm password does not match !';
          return;
        }
        if (this.newpassword.indexOf(' ') >= 0) {
          this.errorFlag = true;
          this.errorMsg = 'The password cannot include blank space !';
          return;
        }
        if (this.newpassword.length < 5) {
          this.errorFlag = true;
          this.errorMsg = 'The password must include at least 5 character !';
          return;
          }
      }
      if (this.newpassword.trim().length === 0 && this.confirmpassword.trim().length > 0) {
        this.errorFlag = true;
        this.errorMsg = 'Please enter the new password !';
        return;
        }
        this.errorFlag = false;
        this.user['username'] = this.username;
        this.user['firstName'] = this.firstName;
        this.user['lastName'] = this.lastName;
        if (this.newpassword === this.confirmpassword && this.newpassword.length > 6) {
          this.user['password'] = this.newpassword;
        }
        console.log('update : ' + JSON.stringify(this.user));
        this.userService.updateUser(this.userId, this.user).subscribe();
        console.log('user updated username: ', this.user.username);
        console.log('user updated firstname: ', this.user.firstName);
    }
  }


