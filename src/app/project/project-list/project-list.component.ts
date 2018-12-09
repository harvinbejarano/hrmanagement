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
		'teamsize',
		'clientname',
		'actions'
	];
	form: FormGroup;
	submitAction: string = 'new';

	constructor(private projectService: ProjectService, private fb: FormBuilder) {
		this.form = this.fb.group({
			id:null,
			name: ['', [Validators.required]],
			teamsize: 0,
			clientname:['', [Validators.required]],
		});
	}

	ngOnInit() {
		this.loadProjectData();
	}

	onFormSubMit() {
		if (this.submitAction === 'new') {
			this.projectService.create(this.form.value).subscribe();	
		}
		else {
			this.projectService.update(this.form.value).subscribe();	
		}
		this.form.reset();
		this.loadProjectData();
		this.displayList = true;
	}

	onNewProject() {
		this.displayList = !this.displayList;
	}

	EditRow(row:Project) {
		this.displayList = false;
		this.form.patchValue(row);
		this.submitAction = 'edit'
	}

	DeleteRow(row:Project) {
		this.projectService.delete(row.id).subscribe(() => { 
			this.form.reset();
		});
		this.loadProjectData();
		this.displayList = true;
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
