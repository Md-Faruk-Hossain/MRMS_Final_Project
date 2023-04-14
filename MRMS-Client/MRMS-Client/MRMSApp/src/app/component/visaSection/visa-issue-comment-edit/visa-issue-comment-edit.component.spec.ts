import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaIssueCommentEditComponent } from './visa-issue-comment-edit.component';

describe('VisaIssueCommentEditComponent', () => {
  let component: VisaIssueCommentEditComponent;
  let fixture: ComponentFixture<VisaIssueCommentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaIssueCommentEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaIssueCommentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
