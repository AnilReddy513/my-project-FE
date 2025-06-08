import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receiver-component',
  templateUrl: './receiver-component.component.html',
  styleUrl: './receiver-component.component.css'
})
export class ReceiverComponentComponent {
  receivedMsg:any = " ";
constructor(public service:DataserviceService, public router:Router){}

ngOnInit(){
  this.receiveMsg();
}
receiveMsg(){
  console.log("called 18");

    console.log("SETtime out called"); 
    
    this.service.msg$.subscribe(datamsg =>{
      this.receivedMsg = datamsg;
      console.log(this.receivedMsg,"recmsg");
      
        })


}
}
