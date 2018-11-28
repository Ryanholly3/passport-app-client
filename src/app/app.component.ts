import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	showNav = true;
	// Disabled Methods until we can figure out how to pass props between components
	public enableNav() {
		this.showNav = false;
	}

	public logOut() {
		this.showNav = true;
	}

}
