import { TestBed } from '@angular/core/testing';

import { RetailerloginGuard } from './retailerlogin.guard';

describe('RetailerloginGuard', () => {
  let guard: RetailerloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RetailerloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
