import { TestBed, inject } from '@angular/core/testing';

import { GetmenuitemsService } from './getmenuitems.service';

describe('GetmenuitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetmenuitemsService]
    });
  });

  it('should be created', inject([GetmenuitemsService], (service: GetmenuitemsService) => {
    expect(service).toBeTruthy();
  }));
});
