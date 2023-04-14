import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFilessViewComponent } from './medical-filess-view.component';

describe('MedicalFilessViewComponent', () => {
  let component: MedicalFilessViewComponent;
  let fixture: ComponentFixture<MedicalFilessViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalFilessViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalFilessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
