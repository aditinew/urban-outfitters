import { TestBed } from '@angular/core/testing';

import { FilterCategoryService } from './filter-category.service';

describe('FilterCategoryService', () => {
  let service: FilterCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
