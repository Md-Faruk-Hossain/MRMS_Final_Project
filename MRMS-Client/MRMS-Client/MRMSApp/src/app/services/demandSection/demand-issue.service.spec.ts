import { TestBed } from '@angular/core/testing';

import { DemandIssueService } from './demand-issue.service';

describe('DemandIssueService', () => {
  let service: DemandIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
