import { TestBed, inject } from '@angular/core/testing';

import { AttendeeDataService } from './attendee-data.service';

describe('AttendeeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendeeDataService]
    });
  });

  it('should be created', inject([AttendeeDataService], (service: AttendeeDataService) => {
    expect(service).toBeTruthy();
  }));
});
