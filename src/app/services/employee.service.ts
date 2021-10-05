import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../employees-app/employees.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  editEmployee(employee: Employees) {
    throw new Error('Method not implemented.');
  }
  getEmployee() {
    throw new Error('Method not implemented.');
  }
  readonly APIUrl = "http://localhost:8080/Employees";
  constructor(private http:HttpClient) {}

  listEmployees():Observable<Employees[]>{
     return this.http.get<Employees[]>(this.APIUrl+'/all');
  }

  insertEmployee(val:Employees){
     return this.http.post(this.APIUrl+'/create',val);
  }

  updateEmployee(val:Employees){
    return this.http.put(this.APIUrl+'/edit/'+val.id,val);
  }

  deleteEmployee(id:number){
    return this.http.delete(this.APIUrl+'/delete/'+id);
  }

}
