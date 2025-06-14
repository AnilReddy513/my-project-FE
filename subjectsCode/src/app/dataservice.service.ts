import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  public messageSource = new Subject<any>();
  msg$ = this.messageSource.asObservable();

public itemsurl = "http://localhost:3000/items";
public ApiPage = "http://localhost:1000/pagination";

movies = "http://localhost:5000/movies";

  constructor(public http:HttpClient) { }

  getMovies():Observable<any>{
   return  this.http.get(this.movies);
  }

  getdata(): Observable<any>{
    return this.http.get('https://fakestoreapi.com/products');
  }

  sendMsg(sntmsg:any){
    this.messageSource.next(sntmsg)
  }

  getItems(){
    return this.http.get(this.itemsurl);
  
}

addItem(name:string){
return this.http.post(this.itemsurl,{name:name}) // in backend expecting as obkcet type we are passing name as objcet

}

updateItem(id:any, name:any){
return this.http.put(this.itemsurl + '/' + id, name);
}

delateItem( id:number){
  return this.http.delete(this.itemsurl + '/' + id);
  }


apipage(reqbody:any):Observable<any>{
 return this.http.post(this.ApiPage, reqbody);
}

}