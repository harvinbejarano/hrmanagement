import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../project.interface.';
import { switchMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	url = 'app/projects';

	constructor(private http: HttpClient) {}

	create(project: Project) {
		return this.http
			.post(this.url, project)
			.pipe(
				switchMap(() => this.http.get<Project[]>(this.url)),
			);
	}

	update(project: Project) {
		this.http
			.put(this.url + '/' + project.id.toString(), project)
			.pipe(
				switchMap(() => this.http.get<Project[]>(this.url)),
			);
	}

	delete(id: number) {
		return this.http
			.delete(this.url + '/' + id.toString())
			.pipe(
				switchMap(() => this.http.get<Project[]>(this.url)),
			);
	}

	getAll() {
		return this.http.get<Project[]>(this.url);
	}

	getById(id: number) {
		return this.http.get<Project>(this.url + '/' + id.toString());
	}
}
