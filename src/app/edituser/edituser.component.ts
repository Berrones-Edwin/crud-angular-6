import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  arrayEmployee:Employee[] = [];
  
  selectedEmployee:boolean = false;
  employee:Employee = new Employee();
  idEmployee:number=0;

  constructor() { }

  ngOnInit() {
    this.getData();
    
  }
  getData(){

    for(let i=0;i<localStorage.length;i++){

      if(localStorage.getItem('employee ' + (i+1))){

        this.arrayEmployee.push(
              JSON.parse(localStorage.getItem('employee ' + (i+1))));
      }
     
    }
  }
  seeData(e){
    console.log(e.target.value)
    this.selectedEmployee=true;
    
    this.employee.id =e.target.value.split(',')[2];
    this.employee.name =e.target.value.split(',')[0];
    this.employee.country =e.target.value.split(',')[1];
    this.idEmployee=e.target.value.split(',')[2];
    
  }
  editUser(employee:Employee){
    console.log(employee)
    localStorage.setItem('employee ' + this.idEmployee,JSON.stringify(employee));
    this.selectedEmployee=false;
  }

}
