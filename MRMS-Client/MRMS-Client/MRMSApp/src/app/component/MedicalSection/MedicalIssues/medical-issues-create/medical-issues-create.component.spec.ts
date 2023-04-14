import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalIssuesCreateComponent } from './medical-issues-create.component';

describe('MedicalIssuesCreateComponent', () => {
  let component: MedicalIssuesCreateComponent;
  let fixture: ComponentFixture<MedicalIssuesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalIssuesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalIssuesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
