import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { UsersService } from '../users.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  latitude= 21.678418;
  longitude= 7.809007;
  pinInfoShow = false;

  latitudeClicked;
  longitudeClicked;
  locationChosen=false;

  mapType='terrain'

 //selected user
  user= [];
  visits= [];
  destinations= [];

  //others Destinations
  filteredDestinations=[];

  // New destination
  cityCountry = '';
  tripDetails = '';


  constructor(private usersService: UsersService,) {}

  ngOnInit() {
    this.getUser()
    this.getFilteredDestinations()
  }

  getUser(){
    this.user = this.usersService.getUser()
    this.visits = this.user[0].visited;
    this.destinations = this.user[0].destinations;
  }

  getFilteredDestinations(){
    this.filteredDestinations = this.usersService.getFilteredDestinations()
  }

  chooseLocation(event){
    this.latitudeClicked = event.coords.lat;
    this.longitudeClicked = event.coords.lng;
    this.locationChosen=true;
  }

  pinInputShow() {
    this.pinInfoShow = true;
  }

  changeMapTerrain() {
    this.mapType = "terrain"
  }

  changeMapSatellite() {
    this.mapType = "satellite"
  }

  changeMapRoadMap() {
    this.mapType = "roadmap"
  }

  changeMapHybrid() {
    this.mapType = "hybrid"
  }

  deleteDestination(destId){
    this.usersService.deleteDestination(destId, this.user[0].id)
    .then(()=>{
      this.user = this.usersService.getUser()
      return this.user
    })
    .then(()=>{
      this.visits = this.user[0].visited;
      this.destinations = this.user[0].destinations;
      return this.destinations
    })
  }

  inputDest(event){
    this.cityCountry = event.target.value
    //SAVE TO VARIABLE ABOVE
  }

  inputDestDetails(event){
    this.tripDetails = event.target.value
    //SAVE TO VARIABLE ABOVE
  }
  submitNewDest(){
    let newDest = {
      name: this.cityCountry,
      latitude: this.latitudeClicked,
      longitude: this.longitudeClicked,
      country_code: "?",
      trip_detail: this.tripDetails,
      passport_users_id: this.user[0].id
    }


    this.usersService.addDestination(newDest, this.user[0].id)
      .then(()=>{
        this.user = this.usersService.getUser()
        return this.user
      })
      .then(()=>{
        this.visits = this.user[0].visited;
        this.destinations = this.user[0].destinations;
        this.locationChosen = false;
        this.pinInfoShow = false;
        return this.destinations
      })
  }

}
