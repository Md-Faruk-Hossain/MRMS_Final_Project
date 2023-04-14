import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCenterCreateComponent } from './medical-center-create.component';

describe('MedicalCenterCreateComponent', () => {
  let component: MedicalCenterCreateComponent;
  let fixture: ComponentFixture<MedicalCenterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalCenterCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalCenterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
