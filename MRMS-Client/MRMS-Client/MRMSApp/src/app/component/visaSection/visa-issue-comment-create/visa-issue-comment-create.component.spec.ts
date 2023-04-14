import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaIssueCommentCreateComponent } from './visa-issue-comment-create.component';

describe('VisaIssueCommentCreateComponent', () => {
  let component: VisaIssueCommentCreateComponent;
  let fixture: ComponentFixture<VisaIssueCommentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaIssueCommentCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaIssueCommentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
