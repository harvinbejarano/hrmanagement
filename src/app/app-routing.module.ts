import { CommonModule } from '@angular/common';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './authentication/notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
	imports: [ RouterModule.forRoot(routes), CommonModule ],
	exports: [ RouterModule ],
	declarations: [],
})
export class AppRoutingModule {}
