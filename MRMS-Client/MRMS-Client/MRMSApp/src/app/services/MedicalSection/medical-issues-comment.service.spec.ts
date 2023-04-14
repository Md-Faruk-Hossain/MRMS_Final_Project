import { TestBed } from '@angular/core/testing';

import { MedicalIssuesCommentService } from './medical-issues-comment.service';

describe('MedicalIssuesCommentService', () => {
  let service: MedicalIssuesCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalIssuesCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
