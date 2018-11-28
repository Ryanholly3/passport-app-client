import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private comp: AppComponent) { }

  ngOnInit() {
  }

  public enableNav(): void {
  	this.comp.enableNav();
  }

  public logOut(): void {
  	this.comp.logOut();
  }

}
