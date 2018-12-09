import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.interface';
import { EmployeeService } from './../services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayList: boolean = true;
  employeeTable: Employee[] = [];
  empleoyeeTableDataSource = new MatTableDataSource(this.employeeTable);
  displayedColumns: string[] = [
		'id',
    'name',
    'actions'
  ];
  form: FormGroup;
	submitAction: string = 'new';
  

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) {
    this.form = this.fb.group({
			id:null,
			name: ['', [Validators.required]]
		});
  }

  ngOnInit() {
    this.loadProjectData();
  }

  loadProjectData() {
		this.employeeService.getAll()
			.subscribe((data: Employee[]) =>
			{
				this.employeeTable = data;
				this.empleoyeeTableDataSource.data = this.employeeTable;
			});
  }
  
  onNewEmployee() {
    this.displayList = !this.displayList;
  }

  onFormSubMit() {
    if (this.submitAction === 'new') {
			this.employeeService.create(this.form.value).subscribe();	
		}
		else {
			this.employeeService.update(this.form.value).subscribe();	
		}
		this.form.reset();
		this.loadProjectData();
		this.displayList = true;
  }

  EditRow(row:Employee) {
		this.displayList = false;
		this.form.patchValue(row);
		this.submitAction = 'edit'
	}

	DeleteRow(row:Employee) {
		this.employeeService.delete(row.id).subscribe(() => { 
			this.form.reset();
		});
		this.loadProjectData();
		this.displayList = true;
	}

}
