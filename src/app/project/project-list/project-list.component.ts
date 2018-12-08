import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from './../../project.interface.';
import { ProjectService } from './../../project.service';


@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.css' ],
})
export class ProjectListComponent implements OnInit {

	projectTable: Project[] =[];
	projectTableDataSource = new MatTableDataSource(this.projectTable);
	displayedColumns: string[] = [
		'id',
		'name',
	];


	constructor(private projectService: ProjectService) {
	}

	ngOnInit() {
		this.projectService.getAll()
			.subscribe((data: Project[]) =>
			{
				this.projectTable = data;
				this.projectTableDataSource.data = this.projectTable;
			});
	}


}
