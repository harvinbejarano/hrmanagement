import { Employee } from './employee.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	constructor(private http: HttpClient) {}
	url = 'app/employes';

	create(employee: Employee) {
		return this.http
			.post(this.url, employee)
			.pipe(
				switchMap(() => this.http.get<Employee[]>(this.url)),
			);
	}

	update(employee: Employee) {
		this.http
			.put(this.url + '/' + employee.id.toString(), employee)
			.pipe(
				switchMap(() => this.http.get<Employee[]>(this.url)),
			);
	}

	delete(id: number) {
		return this.http
			.delete(this.url + '/' + id.toString())
			.pipe(
				switchMap(() => this.http.get<Employee[]>(this.url)),
			);
	}

	getAll() {
		return this.http.get<Employee[]>(this.url);
	}

	getById(id: number) {
		return this.http.get<Employee>(
			this.url + '/' + id.toString(),
		);
	}
}
