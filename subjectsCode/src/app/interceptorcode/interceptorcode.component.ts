import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { log } from 'console';

@Component({
  selector: 'app-interceptorcode',
  templateUrl: './interceptorcode.component.html',
  styleUrl: './interceptorcode.component.css'
})
export class InterceptorcodeComponent {

  inputText="";


  constructor(public dataservice:DataserviceService){}
  fetchData(){
    console.log("17 called");
    
    this.dataservice.getdata().subscribe((data:any)=>{
      
      
const response = data;
console.log(response,"response***********");

    })
 
  
  }
}
