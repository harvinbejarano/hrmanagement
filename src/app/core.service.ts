import { Employee } from './employee.interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from './project.interface.';
import { User } from './user.interface';

export class CoreService implements InMemoryDbService {
	createDb() {
		let users: User[] = [
			{
				id: 1,
				name: 'Harvin Bj',
				username: 'admin',
				password: 'admin',
			},
		];

		let employes: Employee[] = [
			{
				id: 1,
				name: 'Harvy Bj',
				company: 'Signos Software',
				age: 20,
				birthday: '1980-01-01',
				favoritecolor: '#F0FFF0',
				project: 1,
			},
			{
				id: 2,
				name: 'Igor Mejia',
				company: '1A Company',
				age: 25,
				birthday: '1979-01-01',
				favoritecolor: '#F5FFFA',
				project: 1,
			},
		];

		let projects: Project[] = [
			{
				id: 1,
				name: 'Project 1',
				teamsize: 2,
				clientname: 'Company 1',
			},
			{
				id: 2,
				name: 'Project 2',
				teamsize: 0,
				clientname: 'Company 2',
			},
		];
		return { employes, projects, users };
	}
}
