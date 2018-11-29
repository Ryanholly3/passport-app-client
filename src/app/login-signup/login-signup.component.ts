import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service'


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  selectedUser = null;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.usersService.fetchAllUsers()
  }

  //set to scroll down menu instead of submit!!
  setUser(event){
    this.selectedUser = event.target.value;
    this.usersService.fetchUser(this.selectedUser)
  }

}
