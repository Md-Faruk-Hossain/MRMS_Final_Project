import { TestBed } from '@angular/core/testing';

import { MedicalIssuesService } from './medical-issues.service';

describe('MedicalIssuesService', () => {
  let service: MedicalIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
