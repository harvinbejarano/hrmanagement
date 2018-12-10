import { AuthGuard } from '../auth.guard';
import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'project',
		component: ProjectListComponent,
		canActivate: [ AuthGuard ],
	},
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
	declarations: [],
})
export class ProjectRoutingModule {}
