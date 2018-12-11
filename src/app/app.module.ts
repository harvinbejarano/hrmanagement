import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { CoreService } from './core.service';
import { EmployeeModule } from './employee/employee.module';
import { HomeModule } from './home/home.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectModule } from './project/project.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(CoreService),
		NoopAnimationsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		HomeModule,
		EmployeeModule,
		ProjectModule,
		AuthenticationModule,
		AppRoutingModule,
		CoreModule,
		MatListModule,
	],
	providers: [ AuthGuard ],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
