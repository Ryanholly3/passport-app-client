import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserTemplate } from './userTemplate';
import { USERDATA } from './usersData';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<UserTemplate[]> {
  	return of(USERDATA)
  }
}
