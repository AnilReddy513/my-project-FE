import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPagenationdataComponent } from './api-pagenationdata.component';

describe('ApiPagenationdataComponent', () => {
  let component: ApiPagenationdataComponent;
  let fixture: ComponentFixture<ApiPagenationdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiPagenationdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiPagenationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
