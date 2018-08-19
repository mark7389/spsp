import { TestBed, inject } from '@angular/core/testing';

import { GetClassesServicesService } from './get-classes-services.service';

describe('GetClassesServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetClassesServicesService]
    });
  });

  it('should be created', inject([GetClassesServicesService], (service: GetClassesServicesService) => {
    expect(service).toBeTruthy();
  }));
});
