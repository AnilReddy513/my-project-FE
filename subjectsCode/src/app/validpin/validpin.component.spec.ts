import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidpinComponent } from './validpin.component';

describe('ValidpinComponent', () => {
  let component: ValidpinComponent;
  let fixture: ComponentFixture<ValidpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidpinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
