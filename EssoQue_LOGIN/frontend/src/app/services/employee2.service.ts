import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee2 } from '../models/employee2';

@Injectable({
  providedIn: 'root'
})
export class Employee2Service {

  selectedEmployee: Employee2;
  employees: Employee2[];
  
  readonly URL_API = 'http://localhost:3000/api/employees2';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee2();
  }

  postEmployee(employee: Employee2) {
    return this.http.post(this.URL_API, employee);
  }

  getEmployees() {
    return this.http.get(this.URL_API);
  }

  putEmployee(employee: Employee2) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}