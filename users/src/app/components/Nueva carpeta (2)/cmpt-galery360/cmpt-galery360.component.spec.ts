import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptGalery360Component } from './cmpt-galery360.component';

describe('CmptGalery360Component', () => {
  let component: CmptGalery360Component;
  let fixture: ComponentFixture<CmptGalery360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptGalery360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptGalery360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
