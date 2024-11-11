import { TestBed } from '@angular/core/testing';

import { RouteFiltersService } from './route-filters.service';

describe('RouteFiltersService', () => {
  let service: RouteFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
