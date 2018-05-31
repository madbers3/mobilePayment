import { TestBed, inject } from '@angular/core/testing';

import { RequesterService } from './requester.service';

describe('RequesterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequesterService]
    });
  });

  it('should be created', inject([RequesterService], (service: RequesterService) => {
    expect(service).toBeTruthy();
  }));

  it('Should return all operators', inject([RequesterService], (service: RequesterService) => {
    expect(service.getAllOperators()).toContain({
      name: 'Beeline',
      logo: '/assets/images/beeline.svg',
      id: 1,
      codes: [900, 902, 903, 904, 905, 906, 908, 909, 950, 951, 953, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 980, 983, 986]
    });
  }));

  it('Should return operator with id = 1', inject([RequesterService], (service: RequesterService) => {
    expect(service.getOperator(1)).toEqual({
      name: 'Beeline',
      logo: '/assets/images/beeline.svg',
      id: 1,
      codes: [900, 902, 903, 904, 905, 906, 908, 909, 950, 951, 953, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 980, 983, 986]
    });
  }));

  it('Should return operator with id = 3', inject([RequesterService], (service: RequesterService) => {
    expect(service.getOperator(3)).toEqual({
      name: 'Megafon',
      logo: '/assets/images/megafon.svg',
      id: 3,
      codes: [902, 904, 908, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936, 937, 938, 939, 950, 999]
    });
  }));
});
