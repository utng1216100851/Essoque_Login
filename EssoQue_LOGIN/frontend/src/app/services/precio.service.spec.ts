import { TestBed } from '@angular/core/testing';

import { PrecioService } from './precio.service';

describe('PrecioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrecioService = TestBed.get(PrecioService);
    expect(service).toBeTruthy();
  });
});
