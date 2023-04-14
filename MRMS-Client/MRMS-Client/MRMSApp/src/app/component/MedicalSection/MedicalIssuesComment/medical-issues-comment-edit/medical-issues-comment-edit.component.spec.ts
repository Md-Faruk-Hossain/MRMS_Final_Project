import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalIssuesCommentEditComponent } from './medical-issues-comment-edit.component';

describe('MedicalIssuesCommentEditComponent', () => {
  let component: MedicalIssuesCommentEditComponent;
  let fixture: ComponentFixture<MedicalIssuesCommentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalIssuesCommentEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalIssuesCommentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
