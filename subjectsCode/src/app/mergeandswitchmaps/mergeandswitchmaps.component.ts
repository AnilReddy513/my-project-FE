import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mergeandswitchmaps',
  templateUrl: './mergeandswitchmaps.component.html',
  styleUrl: './mergeandswitchmaps.component.css'
})
export class MergeandswitchmapsComponent {
apisubsc: any;


constructor( public dataService:DataserviceService, public router:Router){}


ngOnInit(){
  this.getmoviesData();
}



getmoviesData(){
this.apisubsc=  this.dataService.getMovies().subscribe({
    next:(res:any)=>{
   if(res){
      console.log(res, "response other component");
setTimeout(()=>{
  this.click();
  console.log("click is called************");
  
},1000)
     
      
   }
    },

    error:(err:any)=>{
      console.log(err, "error response");
      
    }
  })
}


ngDestroy(){
  if(this.apisubsc){
        this.apisubsc.unsubscribe();
        console.log("unsubsct");
        
  }
}

click(){
  this.ngDestroy();
  console.log("ng destroy called in cklick methgod");
  
  this.router.navigate(['/mergmapmovies'] )  
}
}
