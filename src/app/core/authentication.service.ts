import { element } from 'protractor';
import { exists } from 'fs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	url = 'app/users';
	users: User[];
	userisLogged = false;
	showToolbar = true;

	constructor(private http: HttpClient, private router: Router) {}

	login(usernameToValidate: string, passwordToValidate: string) {
		return this.http.get<User[]>(this.url).pipe(
			map((users: User[]) => {
				let foundUser = users.find(
					(user) => user.username === usernameToValidate,
				);
				this.userisLogged = foundUser
					? foundUser.password === passwordToValidate
					: false;
				return this.userisLogged;
			}),
		);

		// 	(data) => {
		// 	this.users = data;
		// 	this.users.forEach((element) => {
		// 		if (
		// 			element.username === user &&
		// 			element.password === password
		// 		) {
		// 			this.userisLogged = true;
		// 			this.showToolbar = true;
		// 			this.router.navigate([ 'dashboard' ]);
		// 		}
		// 	});
		// });
	}

	logout() {
		this.userisLogged = false;
		this.showToolbar = false;
		this.router.navigate([ 'login' ]);
	}

	isLoggedIn(): boolean {
		return this.userisLogged;
	}
}
