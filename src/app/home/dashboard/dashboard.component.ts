import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	onOptionClick(option: string) {
		if (option === 'employee') {
			this.router.navigate([ '/employee' ]);
		} else if (option === 'project') {
			this.router.navigate([ '/project' ]);
		}
	}
}
