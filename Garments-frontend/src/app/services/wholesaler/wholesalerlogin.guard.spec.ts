import { TestBed } from '@angular/core/testing';

import { WholesalerloginGuard } from './wholesalerlogin.guard';

describe('WholesalerloginGuard', () => {
  let guard: WholesalerloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WholesalerloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
