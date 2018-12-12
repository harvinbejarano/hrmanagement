import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.interface';
import { EmployeeService } from './../services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from 'src/app/project.interface.';
import { ProjectService } from './../../project/services/project.service';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: [ './employee-list.component.css' ],
})
export class EmployeeListComponent implements OnInit {
	displayList: boolean = true;
	employeeTable: Employee[] = [];
	empleoyeeTableDataSource = new MatTableDataSource(
		this.employeeTable,
	);
	displayedColumns: string[] = [
		'id',
		'name',
		'company',
		'age',
		'birthday',
		'favoritecolor',
		'project',
		'actions',
	];
	projects: Project[] = [];
	form: FormGroup;
	submitAction: string = 'new';

	constructor(
		private employeeService: EmployeeService,
		private projectService: ProjectService,
		private fb: FormBuilder,
	) {
		this.form = this.fb.group({
			id: null,
			name: [ '', [ Validators.required ] ],
			company: [ '', [ Validators.required ] ],
			age: [ '', [ Validators.required ] ],
			birthday: [ '', [ Validators.required ] ],
			favoritecolor: [ '', [ Validators.required ] ],
			project: [ null, [ Validators.required ] ],
		});
	}

	ngOnInit() {
		this.loadProjects();
		this.loadEmployeeData();
	}

	loadEmployeeData() {
		this.employeeService
			.getAll()
			.subscribe((data: Employee[]) => {
				this.employeeTable = data;
				this.empleoyeeTableDataSource.data = this.employeeTable;
			});
	}

	loadProjects() {
		this.projectService.getAll().subscribe((data: Project[]) => {
			this.projects = data;
		});
	}

	onNewEmployee() {
		this.displayList = !this.displayList;
	}

	onFormSubMit() {
		let projectId = Number(this.form.get('project').value);
		if (this.submitAction === 'new') {
			this.employeeService
				.create(this.form.value)
				.subscribe(() => {
					this.projectService
						.getById(projectId)
						.subscribe((project: Project) => {
							project.teamsize++;
							this.projectService
								.update(project)
								.subscribe();
						});
				});
		} else {
			this.employeeService.update(this.form.value).subscribe();
		}
		this.form.reset();
		this.loadEmployeeData();
		this.displayList = true;
	}

	EditRow(row: Employee) {
		this.displayList = false;
		this.form.patchValue(row);
		this.submitAction = 'edit';
	}

	DeleteRow(row: Employee) {
		this.employeeService.delete(row.id).subscribe(() => {
			this.projectService
				.getById(row.project)
				.subscribe((project: Project) => {
					project.teamsize--;
					this.projectService.update(project).subscribe();
				});
			this.form.reset();
		});
		this.loadEmployeeData();
		this.displayList = true;
	}

	cancel() {
		this.displayList = true;
	}
}
