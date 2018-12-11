import { AuthenticationService } from './core/authentication.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent implements OnInit {
	title = 'Hr Management';
	url = 'app/employes';
	url2 = 'app/projects';
	showToolbar = false;

	constructor(private authService: AuthenticationService) {}

	ngOnInit() {
		this.showToolbar = this.authService.showToolbar;
	}

	logout() {
		this.authService.logout();
	}
}
