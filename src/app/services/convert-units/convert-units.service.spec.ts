import { TestBed } from '@angular/core/testing';

import { ConvertUnitsService } from './convert-units.service';

describe('ConvertUnitsService', () => {
  let service: ConvertUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
