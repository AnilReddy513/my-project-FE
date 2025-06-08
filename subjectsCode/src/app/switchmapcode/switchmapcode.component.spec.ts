import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapcodeComponent } from './switchmapcode.component';

describe('SwitchmapcodeComponent', () => {
  let component: SwitchmapcodeComponent;
  let fixture: ComponentFixture<SwitchmapcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchmapcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchmapcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
