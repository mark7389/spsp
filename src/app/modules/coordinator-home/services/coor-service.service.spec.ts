import { TestBed, inject } from '@angular/core/testing';

import { CoorServiceService } from './coor-service.service';

describe('CoorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoorServiceService]
    });
  });

  it('should be created', inject([CoorServiceService], (service: CoorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
