import { TestBed } from '@angular/core/testing';

import { VisaIssueCommentService } from './visa-issue-comment.service';

describe('VisaIssueCommentService', () => {
  let service: VisaIssueCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaIssueCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
