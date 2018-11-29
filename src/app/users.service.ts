import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserTemplate } from './userTemplate';
import { USERDATA } from './usersData';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user = {}

  constructor() { }

  setUser(user){
    this.user = user
  }

  removeUser(){
    this.user = {}
  }

  getUser(){
    return this.user
  }

  getUsers(): Observable<UserTemplate[]> {
  	return of(USERDATA)
  }
}
