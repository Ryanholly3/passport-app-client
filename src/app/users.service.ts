import { Injectable } from '@angular/core';

import { USERDATA } from './usersData';

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  user = []
  users = []
  usersDestinations = []

  constructor() { }

  fetchUser(selectedUser) {
     fetch(`http://localhost:3100/passport_users/${selectedUser}`)
      .then(response => response.json())
      .then(json => {
        this.user = json.user
      })
  }

  fetchAllUsers() {
    fetch(`http://localhost:3100/passport_users`)
     .then(response => response.json())
     .then(json => {
       this.users = json.users
     })
  }

  removeUser(){
    this.user = []
  }

  getUser(){
    return this.user
  }

  fetchDestinations(){
    fetch(`http://localhost:3100/destinations`)
     .then(response => response.json())
     .then(dest => {
       this.usersDestinations = dest.destinations
     })
  }

  getDestinations(){
    return this.usersDestinations
  }

}
