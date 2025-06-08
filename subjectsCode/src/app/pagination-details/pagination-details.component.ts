import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-details',
  templateUrl: './pagination-details.component.html',
  styleUrl: './pagination-details.component.css'
})
export class PaginationDetailsComponent {


  employess:any[]=[]; //full list all emps
  currentPage:any=1;
  itemsPerpage:any=10;
  pagenatedEmps:any[]=[];


  ngOnInit(){
    for(let i=0; i <=50; i++){
      this.employess.push({id:i+1,name:`EmpName ${i+1}`});
    }
    this.updatedPgeWEmps();
  }

  updatedPgeWEmps(){
    const statIndex= (this.currentPage-1)*this.itemsPerpage;
      const endIndex= statIndex+this.itemsPerpage;
   this.pagenatedEmps = this.employess.slice(statIndex,endIndex);
  }


  previous(){
    if(this.currentPage >1){
      this.currentPage--;
      this.updatedPgeWEmps()
  }
  }


  next(){
   if(this.currentPage < this.totalPages()){
    this.currentPage++;
    this.updatedPgeWEmps()
}
  }


  totalPages():any{
    return Math.ceil(this.employess.length/this.itemsPerpage)
  }
}
