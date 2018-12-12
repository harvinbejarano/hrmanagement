import { element } from 'protractor';
import { exists } from 'fs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	url = 'app/users';
	users: User[];
	userisLogged = false;
	loginStatus = new Subject<boolean>();

	constructor(private http: HttpClient) {}

	login(usernameToValidate: string, passwordToValidate: string) {
		return this.http.get<User[]>(this.url).pipe(
			map((users: User[]) => {
				let foundUser = users.find(
					(user) => user.username === usernameToValidate,
				);
				this.userisLogged = foundUser
					? foundUser.password === passwordToValidate
					: false;
				this.loginStatus.next(true);
				return this.userisLogged;
			}),
		);
	}

	logout() {
		this.userisLogged = false;
		this.loginStatus.next(false);
	}

	isLoggedIn(): boolean {
		return this.userisLogged;
	}

	getloginStatus(): Observable<boolean> {
		return this.loginStatus.asObservable();
	}
}
