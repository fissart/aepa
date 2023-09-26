import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandwwwComponent } from './landwww.component';

describe('LandwwwComponent', () => {
  let component: LandwwwComponent;
  let fixture: ComponentFixture<LandwwwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandwwwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandwwwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
