import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { from } from 'rxjs';
import {  mergeMap, switchMap, toArray } from 'rxjs/operators';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-merge-map-code-for-movies',
  templateUrl: './merge-map-code-for-movies.component.html',
  styleUrl: './merge-map-code-for-movies.component.css'
})
export class MergeMapCodeForMoviesComponent {
moviesUrl="http://localhost:5000/movies";

constructor(public http:HttpClient, dataService:DataserviceService){}


ngOnInit(){

}



// getmoviesData(){
//   this.dataService.getMovies().subscribe({
//     next:(res:any)=>{
//    if(res){
//       console.log(res, "response");
      
//    }
//     },

//     error:(err:any)=>{
//       console.log(err, "error response");
      
//     }
//   })
// }
getAll(){
  this.http.get(this.moviesUrl).subscribe({
    next:(res)=>{
      console.log("all this.moviesUrl", res)
    }
  })
}


  saveAll(){
     const movies=[
      { director:"trivikram",title:"sontham", year:2010},
      { director:"Rjamouli",title:"RRR", year:2024},
      { director:"trivikram",title:"Guntur Karam", year:2024},
     ];

  this.http.post(this.moviesUrl, movies).pipe(
     switchMap(()=>this.http.get<any[]>(this.moviesUrl))
    ).subscribe({
    next:(list:any)=>{
      const movieslist = list;
      console.log(movieslist, "movieslist************"); 
    },
    error:(error)=>{
   console.log(error, "movieslist error");
   
    }
  })
  }

}
