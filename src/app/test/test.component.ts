import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public employees = [];
  public errorMsg = "";
  constructor(
    private readonly _employeeService: EmployeeServiceService
  ) {
   }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error);
  }
 

}
