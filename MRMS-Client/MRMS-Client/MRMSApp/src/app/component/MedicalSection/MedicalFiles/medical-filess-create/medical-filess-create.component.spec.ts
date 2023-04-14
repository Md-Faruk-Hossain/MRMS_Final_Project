import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFilessCreateComponent } from './medical-filess-create.component';

describe('MedicalFilessCreateComponent', () => {
  let component: MedicalFilessCreateComponent;
  let fixture: ComponentFixture<MedicalFilessCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalFilessCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalFilessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
