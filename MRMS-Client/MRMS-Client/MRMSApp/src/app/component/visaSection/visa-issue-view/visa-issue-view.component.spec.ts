import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaIssueViewComponent } from './visa-issue-view.component';

describe('VisaIssueViewComponent', () => {
  let component: VisaIssueViewComponent;
  let fixture: ComponentFixture<VisaIssueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaIssueViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaIssueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
