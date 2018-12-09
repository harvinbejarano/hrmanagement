import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './services/project.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ ProjectListComponent ],
	imports: [CommonModule, MatTableModule,MatButtonModule,MatIconModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatCardModule],
	providers:[ProjectService],
	exports: [ ProjectListComponent ],
})
export class ProjectModule {}
