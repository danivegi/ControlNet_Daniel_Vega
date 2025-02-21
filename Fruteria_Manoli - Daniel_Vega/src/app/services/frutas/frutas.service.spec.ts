import { TestBed } from '@angular/core/testing';

import { FrutasService } from './frutas.service';

describe('FrutasService', () => {
  let service: FrutasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrutasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
