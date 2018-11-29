import { Component } from '@angular/core';

import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	showNav = false;

  constructor(private usersService: UsersService){}

  logOut(){
    this.usersService.removeUser()
  }
}
