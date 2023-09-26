import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WWwwwComponent } from './w-wwww.component';

describe('WWwwwComponent', () => {
  let component: WWwwwComponent;
  let fixture: ComponentFixture<WWwwwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WWwwwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WWwwwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
