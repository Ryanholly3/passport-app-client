import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { UsersService } from '../users.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  latitude= 51.678418;
  longitude= 7.809007;

  user= {};
  visits= [];
  destinations= [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    this.user = this.usersService.getUser()
    this.visits = this.user.user[0].visited;
    this.destinations = this.user.user[0].destinations;
  }

}
