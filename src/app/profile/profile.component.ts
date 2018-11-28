import { Component, OnInit } from '@angular/core';
import fakeUser from '../fakeUser.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	users = fakeUser
	title = 'My Profile'

  constructor() { }

  ngOnInit() {
  }

}
