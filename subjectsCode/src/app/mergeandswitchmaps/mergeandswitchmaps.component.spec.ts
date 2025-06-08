import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeandswitchmapsComponent } from './mergeandswitchmaps.component';

describe('MergeandswitchmapsComponent', () => {
  let component: MergeandswitchmapsComponent;
  let fixture: ComponentFixture<MergeandswitchmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeandswitchmapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MergeandswitchmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
