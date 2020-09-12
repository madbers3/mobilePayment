import { inject, TestBed } from '@angular/core/testing';
import { ReplenishPhoneService } from './replenish-phone.service';

describe('ReplenishPhoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplenishPhoneService]
    });
  });

  it('should be created', inject([ReplenishPhoneService], (service: ReplenishPhoneService) => {
    expect(service).toBeTruthy();
  }));
});
