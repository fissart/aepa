import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WWwComponent } from './w-ww.component';

describe('WWwComponent', () => {
  let component: WWwComponent;
  let fixture: ComponentFixture<WWwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WWwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WWwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
