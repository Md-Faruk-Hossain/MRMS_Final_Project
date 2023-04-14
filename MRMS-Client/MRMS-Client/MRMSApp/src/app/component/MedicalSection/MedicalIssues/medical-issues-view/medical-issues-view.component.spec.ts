import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalIssuesViewComponent } from './medical-issues-view.component';

describe('MedicalIssuesViewComponent', () => {
  let component: MedicalIssuesViewComponent;
  let fixture: ComponentFixture<MedicalIssuesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalIssuesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalIssuesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
