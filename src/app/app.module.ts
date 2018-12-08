import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreService } from './core.service';
import { EmployeeModule } from './employee/employee.module';
import { HomeModule } from './home/home.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectModule } from './project/project.module';
import { ProjectService } from './project.service';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(CoreService),
		NoopAnimationsModule,
		AuthenticationModule,
		HomeModule,
		EmployeeModule,
		ProjectModule,
	],
	providers: [ProjectService],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
