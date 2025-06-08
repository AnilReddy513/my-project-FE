import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-errormsg',
  templateUrl: './errormsg.component.html',
  styleUrl: './errormsg.component.css'
})
export class ErrormsgComponent {
  errormsg:any;
  constructor(public dataservice:DataserviceService){}
ngOnInit(){
  this.dataservice.msg$.subscribe((er:any)=>{
this.errormsg = er;
  })
}

}
