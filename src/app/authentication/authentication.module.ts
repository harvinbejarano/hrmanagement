import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
	declarations: [ LoginComponent, NotfoundComponent ],
	imports: [ CommonModule, AuthenticationRoutingModule ],
	exports: [ LoginComponent, NotfoundComponent ],
})
export class AuthenticationModule {}
