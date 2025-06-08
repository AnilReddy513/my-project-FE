import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLimitsComponent } from './manage-limits.component';

describe('ManageLimitsComponent', () => {
  let component: ManageLimitsComponent;
  let fixture: ComponentFixture<ManageLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageLimitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
