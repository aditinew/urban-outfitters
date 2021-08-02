import { TestBed } from '@angular/core/testing';

import { RetailerlogoutGuard } from './retailerlogout.guard';

describe('RetailerlogoutGuard', () => {
  let guard: RetailerlogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RetailerlogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
