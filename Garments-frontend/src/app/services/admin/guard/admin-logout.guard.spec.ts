import { TestBed } from '@angular/core/testing';

import { AdminLogoutGuard } from './admin-logout.guard';

describe('AdminLogoutGuard', () => {
  let guard: AdminLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminLogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
