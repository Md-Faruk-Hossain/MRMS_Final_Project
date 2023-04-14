import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandIssueViewComponent } from './demand-issue-view.component';

describe('DemandIssueViewComponent', () => {
  let component: DemandIssueViewComponent;
  let fixture: ComponentFixture<DemandIssueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandIssueViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandIssueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
