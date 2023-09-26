import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptPromocionComponent } from './cmpt-promocion.component';

describe('CmptPromocionComponent', () => {
  let component: CmptPromocionComponent;
  let fixture: ComponentFixture<CmptPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptPromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
