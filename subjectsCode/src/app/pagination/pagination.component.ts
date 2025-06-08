import { Component } from '@angular/core';
import { validateHeaderValue } from 'http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  fullTransactions: any;
  totalPages: number = 0;
  itemsPerPage: number = 5;
  currentPage=1;
  pagedTransactions: any;





  ngOnInit(){
    const apiResponse ={
      res:{
        body:{
             EtcTnxHistoryResponseList:[
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"},
              {transactionType:"LOAD1",transactionCodeCurrency:"USD", transactionAmount:"10:00"}
    
             ]
    
             
        }
      }
    }

this.fullTransactions = apiResponse.res.body.EtcTnxHistoryResponseList;
this.totalPages= Math.ceil(this.fullTransactions.length / this.itemsPerPage)
this.updatesPerPage();
  }

updatesPerPage(){
  const start =( this.currentPage -1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  this.pagedTransactions = this.fullTransactions.slice(start,end)
}

previousPage(){
  if(this.currentPage >1){
     this.currentPage--;
     this.updatesPerPage();
  }
}

nextPage(){
  if(this.currentPage < this.totalPages){
this.currentPage++;
this.updatesPerPage();
  }
}
}
