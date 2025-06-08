import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-limits',
  templateUrl: './manage-limits.component.html',
  styleUrl: './manage-limits.component.css'
})
export class ManageLimitsComponent {
limits=[
  {label:"ATM LIMIT", value:10000, min:10, max:5000},
  {label:"POS LIMIT", value:12000, min:0, max:6000},
  {label:"Online transaction LIMIT", value:15000, min:0, max:7000},
]

onInputChange(e:any, index:number):void{
  const inputElment= e.target.value;
const value= Number(inputElment);
if(!isNaN(value)){
  const min= this.limits[index].min;
  const max= this.limits[index].max;
  this.limits[index].value=Math.max(min,Math.min(max,value));
  //this.limits[index].value =inputElment
}

}


sliderchange(ev:any, index:number){
  const slidevalue = Number(ev.target.value);
  //const value= parseInt(slidevalue,10);
  this.limits[index].value=slidevalue;

}
}
