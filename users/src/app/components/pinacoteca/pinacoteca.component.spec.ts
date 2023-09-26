import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinacotecaComponent } from './pinacoteca.component';

describe('PinacotecaComponent', () => {
  let component: PinacotecaComponent;
  let fixture: ComponentFixture<PinacotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinacotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinacotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
