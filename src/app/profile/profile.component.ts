import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	title = 'My Profile'

	user= [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.user = this.usersService.getUser()
  }

}
