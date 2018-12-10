import { AuthGuard } from '../auth.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'employee',
		component: EmployeeListComponent,
		canActivate: [ AuthGuard ],
	},
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
	declarations: [],
})
export class EmployeeRoutingModule {}
