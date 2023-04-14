import { TestBed } from '@angular/core/testing';

import { MedicalFilesService } from './medical-files.service';

describe('MedicalFilesService', () => {
  let service: MedicalFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
