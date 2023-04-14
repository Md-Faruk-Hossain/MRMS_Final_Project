import { TestBed } from '@angular/core/testing';

import { VisaIssueService } from './visa-issue.service';

describe('VisaIssueService', () => {
  let service: VisaIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
