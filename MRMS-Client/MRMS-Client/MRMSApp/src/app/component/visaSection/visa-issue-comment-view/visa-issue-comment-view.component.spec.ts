import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaIssueCommentViewComponent } from './visa-issue-comment-view.component';

describe('VisaIssueCommentViewComponent', () => {
  let component: VisaIssueCommentViewComponent;
  let fixture: ComponentFixture<VisaIssueCommentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaIssueCommentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaIssueCommentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
