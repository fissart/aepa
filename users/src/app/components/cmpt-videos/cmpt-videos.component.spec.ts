import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptVideosComponent } from './cmpt-videos.component';

describe('CmptVideosComponent', () => {
  let component: CmptVideosComponent;
  let fixture: ComponentFixture<CmptVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmptVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmptVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
