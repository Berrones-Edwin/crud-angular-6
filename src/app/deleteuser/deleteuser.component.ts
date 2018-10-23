import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  arrayEmployee:Employee[] = [];
  employee:Employee = new Employee();

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
  deleteUser(e){

    console.log(e.target.value)
    localStorage.removeItem('employee ' + e.target.value);
    let count = parseInt(localStorage.getItem('count'));
    count--;
    localStorage.setItem('count',count.toString());
  }

}
