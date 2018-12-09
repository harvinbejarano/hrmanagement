import { Employee } from './employee.interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './project.interface.';

export class CoreService implements InMemoryDbService {
	createDb() {
		let employes: Employee[] = [
			{
				id: 1,
				name: 'HarvyBj',
				/*	company: 'Signos Software',
				age: 38,
				birthday: '1980-01-01',
				favoritecolor: 'blue',
				project: 1,*/
			},
			{
				id: 2,
				name: 'Igor',
				/*company: 'Yuxi',
				age: 40,
				birthday: '1979-01-01',
				favoritecolor: 'yellow',
				project: 1,*/
			},
		];

		let projects: Project[] = [
			{
				id: 1,
				name: 'Project 1',
				teamsize: 0,
				clientname: 'Company 1',
			},
			{
				id: 2,
				name: 'Project 2',
				teamsize: 0,
				clientname: 'Company 2',
			},
		];
		return { employes, projects };
	}
}
