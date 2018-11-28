import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	showNav = false;
	// Disabled Methods until we can figure out how to pass props between components
	// enableNav() {
	// 	this.showNav = false;
	// }

	// logOut() {
	// 	this.showNav = true;
	// }
}
