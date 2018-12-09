import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,MatTableModule,MatButtonModule,MatIconModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatCardModule
  ],
  providers: [EmployeeService],
  exports:[EmployeeListComponent]
})
export class EmployeeModule { }
