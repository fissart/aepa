import { TestBed } from '@angular/core/testing';

import { LandwwwService } from './landwww.service';

describe('LandwwwService', () => {
  let service: LandwwwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandwwwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
