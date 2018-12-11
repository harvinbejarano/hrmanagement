import { AuthenticationService } from './../../core/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ],
})
export class LoginComponent implements OnInit {
	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService,
	) {
		this.form = this.fb.group({
			username: [ '', [ Validators.required ] ],
			password: [ '', [ Validators.required ] ],
		});

		this.form.patchValue({
			username: 'admin',
			password: 'admin',
		});
	}

	ngOnInit() {}

	onFormSubMit() {
		this.authService.login(
			this.form.get('username').value,
			this.form.get('password').value,
		);
	}
}
