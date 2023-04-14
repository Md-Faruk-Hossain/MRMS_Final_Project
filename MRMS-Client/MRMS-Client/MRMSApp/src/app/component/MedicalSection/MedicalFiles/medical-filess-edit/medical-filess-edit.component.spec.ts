import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFilessEditComponent } from './medical-filess-edit.component';

describe('MedicalFilessEditComponent', () => {
  let component: MedicalFilessEditComponent;
  let fixture: ComponentFixture<MedicalFilessEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalFilessEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalFilessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
