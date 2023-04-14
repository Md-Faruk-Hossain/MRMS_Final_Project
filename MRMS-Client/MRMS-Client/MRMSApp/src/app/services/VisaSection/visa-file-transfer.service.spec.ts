import { TestBed } from '@angular/core/testing';

import { VisaFileTransferService } from './visa-file-transfer.service';

describe('VisaFileTransferService', () => {
  let service: VisaFileTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaFileTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
