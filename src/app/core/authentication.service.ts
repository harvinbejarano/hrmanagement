import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	url = 'app/users';

	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get<User[]>(this.url);
	}
}
