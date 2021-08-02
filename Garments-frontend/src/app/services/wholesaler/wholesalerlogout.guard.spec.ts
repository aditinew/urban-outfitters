import { TestBed } from '@angular/core/testing';

import { WholesalerlogoutGuard } from './wholesalerlogout.guard';

describe('WholesalerlogoutGuard', () => {
  let guard: WholesalerlogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WholesalerlogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
