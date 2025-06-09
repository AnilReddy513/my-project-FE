import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-newpagination-code',
  templateUrl: './newpagination-code.component.html',
  styleUrl: './newpagination-code.component.css',
  encapsulation:ViewEncapsulation.None
})
export class NewpaginationCodeComponent {
  allData: any[] = []; // All dummy data
   displayedData: any[] = []; // Data for current page
   currentPage = 1;
   itemsPerPage = 10;
   totalPages = 0;
 pages: number[] = [];
  
 showRightDots = false;
  
   ngOnInit() {
  // Create 100 dummy records
   this.allData = Array.from({ length: 100 }, (_, i) => ({
   id: i + 1,
 name: `Item ${i + 1}`
 }));
  
   this.totalPages = Math.ceil(this.allData.length / this.itemsPerPage);
 this.changePage(1);
  }
  
   changePage(page: number) {
   if (page < 1 || page > this.totalPages) return;
  
   this.currentPage = page;
  
 
  
   this.pages = [];
  
 if (this.totalPages <= 7) {
 for (let i = 1; i <= this.totalPages; i++) {
   this.pages.push(i);
 }
  this.showRightDots = false;
  } else {
const maxPagesToShow = 6;
 for (let i = 1; i <= Math.min(this.currentPage + 1, this.totalPages - 1); i++) {
   this.pages.push(i);
 }
   this.showRightDots = this.pages[this.pages.length - 1] < this.totalPages - 1;
 }
  }




//   changePage(page: number) {
//      if (page < 1 || page > this.totalPages) return;
    
//      this.currentPage = page;
//     this.pages = [];
//     //this.showLeftDots = false;
//     this.showRightDots = false;
    
//      if (this.totalPages <= 7) {
//      // If total pages are less, show all
//      for (let i = 1; i <= this.totalPages; i++) this.pages.push(i);
//    } else {
//      if (page <= 7) {
//     // Show first 6 pages and right dots
//  this.pages = [1, 2, 3, 4, 5, 6, 7];
//    this.showRightDots = true;
//      }
    
//   if (page >= 8 && page < this.totalPages) {
// this.pages = [1, 2, 3, 4];
//      this.showRightDots = true;
//     this.pages.push(page, page + 1, page + 2);
//    if (this.pages[this.pages.length - 1] > this.totalPages) {
//      this.pages[this.pages.length - 1] = this.totalPages;
//     }
//     this.pages = Array.from(new Set(this.pages.filter(p => p <= this.totalPages)));
//    }
    
//     if (page === this.totalPages) {
//     this.pages = [1, 2, 3, 4, 5, this.totalPages - 1, this.totalPages];
//    this.showRightDots = false;
//   }
//      }
    
//      this.pagenite();
//     }
// pagenite(){
//   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//    const endIndex = startIndex + this.itemsPerPage;
//    this.displayedData = this.allData.slice(startIndex, endIndex);
// }










}
