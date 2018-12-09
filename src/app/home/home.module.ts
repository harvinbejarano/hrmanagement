import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,MatCardModule,MatButtonModule,MatIconModule
  ],
  exports: [DashboardComponent],
})
export class HomeModule { }
