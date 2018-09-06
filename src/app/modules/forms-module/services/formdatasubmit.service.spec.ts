import { TestBed, inject } from '@angular/core/testing';

import { FormdatasubmitService } from './formdatasubmit.service';

describe('FormdatasubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormdatasubmitService]
    });
  });

  it('should be created', inject([FormdatasubmitService], (service: FormdatasubmitService) => {
    expect(service).toBeTruthy();
  }));
});
