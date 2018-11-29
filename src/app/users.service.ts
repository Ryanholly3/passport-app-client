import { Injectable } from '@angular/core';

import { USERDATA } from './usersData';

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  user = {}
  users = {}


  constructor() { }

  fetchUser(selectedUser) {
     fetch(`http://localhost:3100/passport_users/${selectedUser}`)
      .then(response => response.json())
      .then(json => {
        this.user = json
      })
  }

  fetchAllUsers() {
    fetch(`http://localhost:3100/passport_users`)
     .then(response => response.json())
     .then(json => {
       this.users = json
     })
  }

  removeUser(){
    this.user = {}
  }

  getUser(){
    return this.user
  }

}
