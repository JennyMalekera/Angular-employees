
import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employees } from '../employees.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeesList:Employees[]=[];
  employee:Employees;

  updateName:string="";
  updateLastName:string="";
  updateAge:number= 0;

  EmployeeName:string="";
  EmployeeLastName:string="";
  EmployeeAge:string="";

  isEdit:boolean=false;
  newName:string="";
  newLastName:string="";
  newAge: number =0 ;
  addEditEmployee:boolean=false;
  EditEmployee:boolean=false;

  totalRecords!:number;
  page:number=1;

  constructor(private service:EmployeeService) {
    this.employee = new Employees();
  }

  ngOnInit(): void {
    this.updateName = this.updateName;
    this.updateLastName = this.updateLastName;
    this.newAge = this.newAge;

    this.newName = this.newName;
    this.newLastName = this.newLastName;
    this.newAge = this.newAge;


    this.refreshTableData();
    this.addEditEmployee=false;
    this.EditEmployee=false;
  }

  refreshTableData(){
    this.service.listEmployees().subscribe(data=>{
      this.employeesList=data;
      this.totalRecords=data.length;


    });
  }

  insertEmployee(){
    this.employee.name = this.newName;
    this.employee.lastname = this.newLastName;
    this.employee.age = this.newAge;
    this.addEditEmployee=true;

    if(this.employee.name.length==0 || this.employee.name.length==0 ){
      alert("Do not leave the field NAME blank!");
    }
    else{
      this.service.insertEmployee(this.employee).subscribe(data=>{alert("Employee added successfully!");
      this.refreshTableData();
      this.resetFields();
    });
   }
  }


  deleteEmp(dataItem: Employees){
   if(confirm("Are you sure you want to delete "+dataItem.name+" "+ dataItem.lastname+" "+ dataItem.age+" "+ dataItem.id+" ?")){
     this.employee=dataItem;
    this.service.deleteEmployee(dataItem.id).subscribe(data=>{
       alert("Employee Deleted!");
       this.refreshTableData();
    });
  }
  }

  editMode(dataItem:Employees){
    this.updateName=dataItem.name;
    this.updateLastName=dataItem.lastname;
    this.EditEmployee=true;

  }

  updateEmployee(dataItem:Employees){
    this.EmployeeName=dataItem.name;
    this.EmployeeLastName=dataItem.lastname;
  }

  saveChange(dataItem:Employees)
  {
   dataItem.name= this.EmployeeName;
   this.service.updateEmployee(dataItem).subscribe(data=>{
      this.refreshTableData();
      this.isEdit=false;
    });
  }

  resetFields(){
    this.newName = "";
    this.newLastName = "";

  }
}
