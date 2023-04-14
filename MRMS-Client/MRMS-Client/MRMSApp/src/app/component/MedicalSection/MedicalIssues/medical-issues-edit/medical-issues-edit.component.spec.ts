import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalIssuesEditComponent } from './medical-issues-edit.component';

describe('MedicalIssuesEditComponent', () => {
  let component: MedicalIssuesEditComponent;
  let fixture: ComponentFixture<MedicalIssuesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalIssuesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalIssuesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
