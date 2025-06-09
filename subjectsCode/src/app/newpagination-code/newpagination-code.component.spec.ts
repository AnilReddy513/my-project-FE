import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpaginationCodeComponent } from './newpagination-code.component';

describe('NewpaginationCodeComponent', () => {
  let component: NewpaginationCodeComponent;
  let fixture: ComponentFixture<NewpaginationCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewpaginationCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewpaginationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
