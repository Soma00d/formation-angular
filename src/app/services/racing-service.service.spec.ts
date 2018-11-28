import { TestBed } from '@angular/core/testing';

import { RacingServiceService } from './racing-service.service';

describe('RacingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RacingServiceService = TestBed.get(RacingServiceService);
    expect(service).toBeTruthy();
  });
});
