import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptFapComponent } from './cmpt-fap.component';

describe('CmptFapComponent', () => {
  let component: CmptFapComponent;
  let fixture: ComponentFixture<CmptFapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptFapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptFapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
