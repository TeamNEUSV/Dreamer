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
      if (this.username) {
        this.username = this.username.trim();
      }
      if (this.firstName) {
        this.firstName = this.firstName.trim();
      }
      if (this.lastName) {
        this.lastName = this.lastName.trim();
      }
      if (this.newpassword) {
        this.newpassword = this.newpassword.trim();
      }
      if (this.confirmpassword) {
        this.confirmpassword = this.confirmpassword.trim();
      }
      if (this.newpassword !== this.confirmpassword) {
          this.errorFlag = true;
          this.errorMsg = 'The confirm password does not match !';
          return;
      }
      if (this.username && this.username.length > 0) {
          this.user['username'] = this.username;
      }
      if (this.firstName && this.firstName.length > 0) {
          this.user['firstName'] = this.firstName;
      }
      if (this.lastName && this.lastName.length > 0) {
          this.user['lastName'] = this.lastName;
      }
      if (this.newpassword && this.newpassword.length > 0) {
          this.user['password'] = this.newpassword;
      }
      this.errorFlag = false;
      this.userService.updateUser(this.userId, this.user).subscribe();
    }
  }


