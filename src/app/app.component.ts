import { AuthenticationService } from './core/authentication.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent  { 
	title = 'Hr Management';
	url = 'app/employes';
	url2 = 'app/projects';
	showToolbar = true;

	constructor(private authService: AuthenticationService) {}

	logout() {
		this.authService.logout();
	}
}
