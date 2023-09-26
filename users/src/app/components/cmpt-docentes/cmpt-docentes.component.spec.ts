import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptDocentesComponent } from './cmpt-docentes.component';

describe('CmptDocentesComponent', () => {
  let component: CmptDocentesComponent;
  let fixture: ComponentFixture<CmptDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptDocentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
