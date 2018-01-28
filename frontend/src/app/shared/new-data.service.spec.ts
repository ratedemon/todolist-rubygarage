import { TestBed, inject } from '@angular/core/testing';

import { NewDataService } from './new-data.service';

describe('NewDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewDataService]
    });
  });

  it('should be created', inject([NewDataService], (service: NewDataService) => {
    expect(service).toBeTruthy();
  }));
});
