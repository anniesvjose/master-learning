import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployeeList(){
    return [
      {"id":1,"name":'Annies',"age":28},
      {"id":1,"name":'Amal',"age":29},
      {"id":3,"name":"test","age":26}
    ]
  }
}
