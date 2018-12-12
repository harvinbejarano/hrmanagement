import { AuthenticationService } from './core/authentication.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

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

	@ViewChild('sidenav') sideNavElement: MatSidenav;

	constructor(
		private authService: AuthenticationService,
		private router: Router,
	) {}

	ngOnInit() {
		this.authService.getloginStatus().subscribe((loginStatus) => {
			this.showToolbar = loginStatus;
			if (!loginStatus) {
				this.sideNavElement.close();
			}
		});
	}

	logout() {
		this.authService.logout();
		this.router.navigate([ 'login' ]);
	}
}
