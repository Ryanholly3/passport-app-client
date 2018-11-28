import { Component, OnInit } from '@angular/core';

import { UserTemplate } from '../userTemplate'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	title = 'My Profile'

	data: UserTemplate[]

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers(): void {
  	this.usersService.getUsers()
  	.subscribe(users => {
  		this.data = users
  	})
  }

}
