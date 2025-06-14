import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { log } from 'console';
type PageToken = number | '...';

@Component({
  selector: 'app-api-pagenationdata',
  templateUrl: './api-pagenationdata.component.html',
  styleUrls: ['./api-pagenationdata.component.css']
})
export class ApiPagenationdataComponent {

  displayedData: any[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;
  pages: PageToken[] = [];

  constructor(public dataservice: DataserviceService) { }

  ngOnInit() {
    this.changePage(this.currentPage);
  }

  changePage(page: number) {
    const reqbody = {
      pageNo: page,
      pageSize: this.pageSize
    };

    this.dataservice.apipage(reqbody).subscribe({
      next: (res: any) => {
        this.displayedData = res.data;
        this.totalPages = res.totalPages;
        this.currentPage = page;
        this.pages = this.buildPages();
      }
    });
  }

  buildPages(): PageToken[] {
    const pages: PageToken[] = [];
    const total = this.totalPages;
    const current = this.currentPage;

    if (total <= 4) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, '...', total);
      } else if (current >= total - 2) {
        pages.push(1, '...');
        for (let i = total - 2; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1, '...', current, '...', total);
      }
    }

    return pages;
  }
}
