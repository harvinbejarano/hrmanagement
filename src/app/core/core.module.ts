import { AuthenticationService } from './authentication.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [],
	providers: [ AuthenticationService ],
	imports: [ CommonModule ],
})
export class CoreModule {}
