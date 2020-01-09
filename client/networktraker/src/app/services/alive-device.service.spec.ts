import { TestBed } from '@angular/core/testing';

import { AliveDeviceService } from './alive-device.service';

describe('AliveDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AliveDeviceService = TestBed.get(AliveDeviceService);
    expect(service).toBeTruthy();
  });
});
