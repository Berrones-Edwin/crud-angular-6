import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title:string = 'Vista General de los Usuarios';
  arrayEmployee:Employee[] = [];

  constructor() { 
    this.getData();
  }

  ngOnInit() {
    
  }

  getData(){

    for(let i=0;i<localStorage.length;i++){

      if(localStorage.getItem('employee ' + (i+1))){

        this.arrayEmployee.push(
              JSON.parse(localStorage.getItem('employee ' + (i+1))));
        // console.log(this.arrayEmployee);
        // console.log(localStorage.getItem('employee ' + i));
      }
     
    }
  }


}
