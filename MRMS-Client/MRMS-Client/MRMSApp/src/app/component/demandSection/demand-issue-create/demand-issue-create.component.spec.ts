import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandIssueCreateComponent } from './demand-issue-create.component';

describe('DemandIssueCreateComponent', () => {
  let component: DemandIssueCreateComponent;
  let fixture: ComponentFixture<DemandIssueCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandIssueCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandIssueCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
