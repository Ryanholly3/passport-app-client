import { Component, OnInit } from '@angular/core';

import { UserTemplate } from '../userTemplate'
import { UsersService } from '../users.service'


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  data: UserTemplate[]

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
  	this.usersService.getUsers()
  	.subscribe(users => {
  		this.data = users
  	})
  }

  setUser(){
    this.usersService.setUser({
      id: 2,
      name: 'Matt',
      email: 'matt@matt.com',
      age: 32,
      gender: 'male',
      homeCountry: 'denver',
      bio: 'I love to teach coding',
    })
    console.log('login user:',this.usersService.user)
  }

}
