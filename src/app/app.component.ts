import { Component } from '@angular/core';
import { Employee } from './employee.interface';
import { HttpClient } from '@angular/common/http';
import { Project } from './project.interface.';
import { ProjectService } from './project/services/project.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	title = 'Hr Management';
	url = 'app/employes';
	url2 = 'app/projects';

	constructor(
		private http: HttpClient
	) {
		//this.http.get(this.url).subscribe(console.log);
		//this.http.get(this.url2).subscribe(console.log);

		//All
		// this.service.getAll().subscribe((data) => {
		// 	console.log(data);
		// });

		//Create
		/*let emp: Employee = { id: 1, name: 'Robert Galarga' };
		this.service.create(emp).subscribe((data) => {
			console.log(data);
		});*/

		/*let project: Project = { id: 3, name: 'Project 3' };
		this.service.create(project).subscribe((data) => {
			console.log(data);
		});*/

		//Delete
		// this.service.delete(1).subscribe((data) => {
		// 	console.log(data);
		// });

		/*this.service.getById(1).subscribe((data) => {
			console.log(data);
		});*/
	}
}
