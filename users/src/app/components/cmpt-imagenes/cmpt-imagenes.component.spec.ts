import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptImagenesComponent } from './cmpt-imagenes.component';

describe('CmptImagenesComponent', () => {
  let component: CmptImagenesComponent;
  let fixture: ComponentFixture<CmptImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
