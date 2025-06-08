import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {
  res:any;
  constructor(public service:DataserviceService, public router:Router){}
click1(){
  console.log("click");
  
this.service.getdata().subscribe(data=>{
  this. res = data;
this.res =[];
  if(this.res.length>1){
    console.log("sicess",this. res)
  }
  else if(this.res.length ==0){
    this.service.sendMsg("anil error"); 
  }


})
}

send(){
 
  this.service.sendMsg("hello from source");  
this.router.navigate(['/received'])


}
}
