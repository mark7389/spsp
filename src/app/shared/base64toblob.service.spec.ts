import { TestBed, inject } from '@angular/core/testing';

import { Base64toblobService } from './base64toblob.service';

describe('Base64toblobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Base64toblobService]
    });
  });

  it('should be created', inject([Base64toblobService], (service: Base64toblobService) => {
    expect(service).toBeTruthy();
  }));
});
