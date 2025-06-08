import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapCodeForMoviesComponent } from './merge-map-code-for-movies.component';

describe('MergeMapCodeForMoviesComponent', () => {
  let component: MergeMapCodeForMoviesComponent;
  let fixture: ComponentFixture<MergeMapCodeForMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeMapCodeForMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MergeMapCodeForMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
