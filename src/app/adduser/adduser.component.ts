import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  
  selectedEmployee:Employee = new Employee();
  
  constructor() { }
  
 
  ngOnInit() {

    if(parseInt(localStorage.getItem('count'))>1){
      return;
    }else{
      
      localStorage.setItem('count',"1");
    }
    
  }

  
  addUser(employee:Employee){
    employee.id=parseInt(localStorage.getItem('count'));
    
    localStorage.setItem('employee '  + 
    parseInt(localStorage.getItem('count'))
    ,JSON.stringify(employee));

    
    let count = parseInt(localStorage.getItem('count'));
    count++;
    
    localStorage.setItem('count',count.toString());
  }

}
