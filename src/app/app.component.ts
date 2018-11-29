import { Component } from '@angular/core';

import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// showNav false = ENABLED
	showNav = true;

  constructor(private usersService: UsersService){}

  logOut(){
    this.usersService.removeUser();
    this.navDisabled();
  }

  public navEnabled(){
    this.showNav = false; 
  }

  public navDisabled(){
    this.showNav = true; 
  }
}
