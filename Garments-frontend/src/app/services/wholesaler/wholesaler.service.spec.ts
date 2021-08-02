import { TestBed } from '@angular/core/testing';

import { WholesalerService } from './wholesaler.service';

describe('WholesalerService', () => {
  let service: WholesalerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WholesalerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
