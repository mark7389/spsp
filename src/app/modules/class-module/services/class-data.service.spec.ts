import { TestBed, inject } from '@angular/core/testing';

import { ClassDataService } from './class-data.service';

describe('ClassDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassDataService]
    });
  });

  it('should be created', inject([ClassDataService], (service: ClassDataService) => {
    expect(service).toBeTruthy();
  }));
});
