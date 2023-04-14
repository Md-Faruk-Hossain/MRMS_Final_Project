import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCenterViewComponent } from './medical-center-view.component';

describe('MedicalCenterViewComponent', () => {
  let component: MedicalCenterViewComponent;
  let fixture: ComponentFixture<MedicalCenterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalCenterViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalCenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
