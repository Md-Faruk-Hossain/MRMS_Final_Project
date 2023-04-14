import { TestBed } from '@angular/core/testing';

import { VisaFileService } from './visa-file.service';

describe('VisaFileService', () => {
  let service: VisaFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
