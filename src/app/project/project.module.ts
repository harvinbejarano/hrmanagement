import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
	declarations: [ ProjectListComponent ],
	imports: [ CommonModule, MatTableModule ],
	exports: [ ProjectListComponent ],
})
export class ProjectModule {}
