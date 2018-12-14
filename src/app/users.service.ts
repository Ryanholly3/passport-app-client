import { Injectable } from '@angular/core';

import { USERDATA } from './usersData';

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  user = []
  users = []
  usersDestinations = []
  filteredDestinations = []

  backEnd;

  constructor() { }

  checkBackendConnection() {
    fetch(`http://localhost:3100/`)
     .then(response => {
        console.log('LOCAL HOST')
         this.backEnd = 'localhost'
         this.fetchAllUsers()
         this.fetchDestinations()
      })
      .catch(response => {
        this.backEnd = 'deployedBackend'
        this.fetchAllUsers()
        this.fetchDestinations()
      })
  }

  fetchUser(selectedUser) {
    if(this.backEnd === "localhost"){
      return fetch(`http://localhost:3100/passport_users/${selectedUser}`)
       .then(response => response.json())
       .then(json => {
         this.user = json.user
         return this.user
       })
    } if (this.backEnd === "deployedBackend"){
      return fetch(`https://evening-refuge-33727.herokuapp.com/passport_users/${selectedUser}`)
       .then(response => response.json())
       .then(json => {
         this.user = json.user
         return this.user
       })
    }
  }


  fetchAllUsers() {
    if(this.backEnd === "localhost"){
      fetch(`http://localhost:3100/passport_users`)
       .then(response => response.json())
       .then(json => {
         this.users = json.users
       })
    } if(this.backEnd === "deployedBackend"){
      fetch(`https://evening-refuge-33727.herokuapp.com/passport_users`)
       .then(response => response.json())
       .then(json => {
         this.users = json.users
       })
    }
  }

  removeUser(){
    this.user = []
    this.users = []
    this.usersDestinations = []
    this.filteredDestinations = []
  }

  getUser(){
    return this.user
  }

  fetchDestinations(){

    if(this.backEnd === "localhost"){
      fetch(`http://localhost:3100/destinations`)
       .then(response => response.json())
       .then(dest => {
         this.usersDestinations = dest.destinations
       })
    } if (this.backEnd === "deployedBackend"){
      fetch(`https://evening-refuge-33727.herokuapp.com/destinations`)
       .then(response => response.json())
       .then(dest => {
         this.usersDestinations = dest.destinations
       })
    }
  }

  filterDestinations(selectedUser){
    const filtered = this.usersDestinations.filter((dest)=>{
      return dest.passport_users_id !== parseInt(selectedUser)
    })
    this.filteredDestinations = filtered
  }

  getFilteredDestinations(){
    return this.filteredDestinations
  }

  deleteDestination(destId, selectedUser){
    if(this.backEnd === 'localhost'){
      return fetch(`http://localhost:3100/destinations/${destId}`, {
        method: 'DELETE',
      }).then(()=>{
        return this.fetchUser(selectedUser)
      })
    } else if (this.backEnd === 'deployedBackend'){
      return fetch(`https://evening-refuge-33727.herokuapp.com/destinations/${destId}`,{
        method: 'DELETE',
      }).then(()=>{
        return this.fetchUser(selectedUser)
      })
    }
  }

  addDestination(newDest, selectedUser){
    if(this.backEnd === 'localhost'){
      return fetch(`http://localhost:3100/destinations`, {
        method: 'POST',
        body: JSON.stringify(newDest),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      .then(()=>{
        return this.fetchUser(selectedUser)
      })
    } else if (this.backEnd === 'deployedBackend'){
      return fetch(`https://evening-refuge-33727.herokuapp.com/destinations`,{
        method: 'POST',
        body: JSON.stringify(newDest),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      .then(()=>{
        return this.fetchUser(selectedUser)
      })
    }
  }

}
