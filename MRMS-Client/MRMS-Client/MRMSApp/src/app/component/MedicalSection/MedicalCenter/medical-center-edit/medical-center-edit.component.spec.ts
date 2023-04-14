import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCenterEditComponent } from './medical-center-edit.component';

describe('MedicalCenterEditComponent', () => {
  let component: MedicalCenterEditComponent;
  let fixture: ComponentFixture<MedicalCenterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalCenterEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalCenterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
