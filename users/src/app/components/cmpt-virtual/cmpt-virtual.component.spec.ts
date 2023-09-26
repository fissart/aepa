import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptVirtualComponent } from './cmpt-virtual.component';

describe('CmptVirtualComponent', () => {
  let component: CmptVirtualComponent;
  let fixture: ComponentFixture<CmptVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
