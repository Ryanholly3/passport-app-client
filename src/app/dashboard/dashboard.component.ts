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

  latitudeClicked;
  longitudeClicked;
  locationChosen=false;

  user= [];
  userId;
  visits= [];
  destinations= [];

  usersDestinations=[];
  filteredDestinations=[]


  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUser()
    this.getUsersDestinations()
  }

  getUser(){
    this.user = this.usersService.getUser()
    this.userId = this.user[0].id;
    this.visits = this.user[0].visited;
    this.destinations = this.user[0].destinations;
  }

  getUsersDestinations(){
    this.usersDestinations = this.usersService.getDestinations()
    this.filterDestinations(this.usersDestinations)
  }

  filterDestinations(destinations){
    const filtered = destinations.filter((dest)=>{
      return dest.passport_users_id !== this.userId
    })
    this.filteredDestinations = filtered
    console.log(this.filteredDestinations)
  }

  chooseLocation(event){
    this.latitudeClicked = event.coords.lat;
    this.longitudeClicked = event.coords.lng;
    this.locationChosen=true;
  }
}
