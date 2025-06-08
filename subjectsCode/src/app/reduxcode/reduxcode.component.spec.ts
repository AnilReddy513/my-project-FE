import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxcodeComponent } from './reduxcode.component';

describe('ReduxcodeComponent', () => {
  let component: ReduxcodeComponent;
  let fixture: ComponentFixture<ReduxcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReduxcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReduxcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
