import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service'

import { AppComponent } from '../app.component'


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  selectedUser = null;

  constructor(private usersService: UsersService, private comp: AppComponent) { }

  ngOnInit() {
    this.getAllUsers()
    this.getUsersDestinations()
  }

  getAllUsers() {
    this.usersService.fetchAllUsers()
  }

  getUsersDestinations() {
    this.usersService.fetchDestinations()
  }

  //set to scroll down menu instead of submit!!
  setUser(event){
    this.selectedUser = event.target.value;
    this.usersService.fetchUser(this.selectedUser)
  }

  public navEnabled(): void {
    this.comp.navEnabled(); 
  }

  public navDisabled(): void {
    this.comp.navDisabled(); 
  }

}
