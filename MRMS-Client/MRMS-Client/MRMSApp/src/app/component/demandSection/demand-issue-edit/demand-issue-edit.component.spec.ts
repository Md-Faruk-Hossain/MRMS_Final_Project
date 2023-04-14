import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandIssueEditComponent } from './demand-issue-edit.component';

describe('DemandIssueEditComponent', () => {
  let component: DemandIssueEditComponent;
  let fixture: ComponentFixture<DemandIssueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandIssueEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandIssueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
