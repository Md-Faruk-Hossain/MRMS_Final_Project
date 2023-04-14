import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalIssuesCommentViewComponent } from './medical-issues-comment-view.component';

describe('MedicalIssuesCommentViewComponent', () => {
  let component: MedicalIssuesCommentViewComponent;
  let fixture: ComponentFixture<MedicalIssuesCommentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalIssuesCommentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalIssuesCommentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
