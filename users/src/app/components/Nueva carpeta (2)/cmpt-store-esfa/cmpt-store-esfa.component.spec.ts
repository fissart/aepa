import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptStoreEsfaComponent } from './cmpt-store-esfa.component';

describe('CmptStoreEsfaComponent', () => {
  let component: CmptStoreEsfaComponent;
  let fixture: ComponentFixture<CmptStoreEsfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptStoreEsfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptStoreEsfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
