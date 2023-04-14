import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaIssueEditComponent } from './visa-issue-edit.component';

describe('VisaIssueEditComponent', () => {
  let component: VisaIssueEditComponent;
  let fixture: ComponentFixture<VisaIssueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaIssueEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaIssueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
