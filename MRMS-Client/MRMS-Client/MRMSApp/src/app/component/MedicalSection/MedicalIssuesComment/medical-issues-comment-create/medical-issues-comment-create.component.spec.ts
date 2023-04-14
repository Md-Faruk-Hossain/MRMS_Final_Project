import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalIssuesCommentCreateComponent } from './medical-issues-comment-create.component';

describe('MedicalIssuesCommentCreateComponent', () => {
  let component: MedicalIssuesCommentCreateComponent;
  let fixture: ComponentFixture<MedicalIssuesCommentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalIssuesCommentCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalIssuesCommentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
