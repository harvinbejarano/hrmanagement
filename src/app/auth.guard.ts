import { AuthenticationService } from './core/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private authService: AuthenticationService,
		private router: Router,
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> | Promise<boolean> | boolean {
		this.router.navigate([ '/login' ]);
		return false;
	}
}
