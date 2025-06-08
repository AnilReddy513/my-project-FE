import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorcodeComponent } from './interceptorcode.component';

describe('InterceptorcodeComponent', () => {
  let component: InterceptorcodeComponent;
  let fixture: ComponentFixture<InterceptorcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterceptorcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterceptorcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
