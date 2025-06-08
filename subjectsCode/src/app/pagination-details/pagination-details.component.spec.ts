import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationDetailsComponent } from './pagination-details.component';

describe('PaginationDetailsComponent', () => {
  let component: PaginationDetailsComponent;
  let fixture: ComponentFixture<PaginationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
