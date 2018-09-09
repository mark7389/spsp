import { TestBed, inject } from '@angular/core/testing';

import { ImageconverterService } from './imageconverter.service';

describe('ImageconverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageconverterService]
    });
  });

  it('should be created', inject([ImageconverterService], (service: ImageconverterService) => {
    expect(service).toBeTruthy();
  }));
});
