import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreService } from './core.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ AppComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(CoreService),
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
