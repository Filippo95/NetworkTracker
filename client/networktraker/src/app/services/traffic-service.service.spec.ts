import { TestBed } from '@angular/core/testing';

import { TrafficServiceService } from './traffic-service.service';

describe('TrafficServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrafficServiceService = TestBed.get(TrafficServiceService);
    expect(service).toBeTruthy();
  });
});
