import { TestBed } from '@angular/core/testing';

import { ProductSpecsService } from './product-specs.service';

describe('ProductSpecsService', () => {
  let service: ProductSpecsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSpecsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
