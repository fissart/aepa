import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WWwwComponent } from './w-www.component';

describe('WWwwComponent', () => {
  let component: WWwwComponent;
  let fixture: ComponentFixture<WWwwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WWwwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WWwwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
