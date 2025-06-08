import { Component, ContentChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { query } from 'express';
import { log } from 'console';

@Component({
  selector: 'app-switchmapcode',
  templateUrl: './switchmapcode.component.html',
  styleUrl: './switchmapcode.component.css'
})
export class SwitchmapcodeComponent {
 // searchControl = new FormControl();
public searchSubject = new Subject<any>();
@ContentChild('msg')receivedmsg!:ElementRef;
dataFlag:boolean=false;
movies :any[]=[];
  constructor(public http:HttpClient){
    this.searchSubject.pipe(
      debounceTime(300),
           switchMap(query => this.http.get(`http://localhost:5000/movies?search=${query}`))).subscribe(
  {
next:(res:any)=>{
console.log(res, "search");
this.movies = res;
this.dataFlag= true;

console.log(this.receivedmsg?.nativeElement?.textContent, "recivedmessage*******************");
}
  })}
  

//   ngOnInit(){
//     this.searchControl.valueChanges.pipe(
//       debounceTime(300),
//       switchMap(query => this.http.get(`http://localhost:5000/movies?search=${query}`))).subscribe({
//         next:(result:any)=>{
// console.log(result, "search values");

//         }
//       })
    
//   }

onSearch(val:any){


  const searchingValu = val.target.value;
this.searchSubject.next(searchingValu)


}

}
