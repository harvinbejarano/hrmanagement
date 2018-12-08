import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from './../../project.interface.';
import { ProjectService } from '../services/project.service';


@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.css' ],
})
export class ProjectListComponent implements OnInit {
	displayList: boolean = true;
	projectTable: Project[] =[];
	projectTableDataSource = new MatTableDataSource(this.projectTable);
	displayedColumns: string[] = [
		'id',
		'name',
	];
	form: FormGroup;


	constructor(private projectService: ProjectService, private fb: FormBuilder) {
		this.form = this.fb.group({
			name:['',[Validators.required]],
		});
	}

	ngOnInit() {
		this.loadProjectData();
	}

	onFormSubMit(event) {
		this.projectService.create(this.form.value).subscribe((data) => {
			this.form.clearAsyncValidators();
		 });

		this.loadProjectData();
		this.displayList = true;
		console.log(event);
	}

	onNewProject() {
		this.displayList = !this.displayList;
	}
	loadProjectData() {
		this.projectService.getAll()
			.subscribe((data: Project[]) =>
			{
				this.projectTable = data;
				this.projectTableDataSource.data = this.projectTable;
			});
	}


}
