import { element } from 'protractor';
import { exists } from 'fs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	url = 'app/users';
	users: User[];

	constructor(private http: HttpClient, private router: Router) {
		localStorage.setItem('userIsloggedIn', '0');
	}

	login(user: string, password: string) {
		this.http.get<User[]>(this.url).subscribe((data) => {
			this.users = data;
			this.users.forEach((element) => {
				if (
					element.username === user &&
					element.password === password
				) {
					localStorage.setItem('userIsloggedIn', '1');
					this.router.navigate([ 'dashboard' ]);
				}
			});
		});
	}

	isLoggedIn(): boolean {
		let isllogged = localStorage.getItem('userIsloggedIn');
		return isllogged === '0' ? false : true;
	}
}
