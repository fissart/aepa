import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WWComponent } from './w-w.component';

describe('WWComponent', () => {
  let component: WWComponent;
  let fixture: ComponentFixture<WWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
