import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaIssueCreateComponent } from './visa-issue-create.component';

describe('VisaIssueCreateComponent', () => {
  let component: VisaIssueCreateComponent;
  let fixture: ComponentFixture<VisaIssueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaIssueCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaIssueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
