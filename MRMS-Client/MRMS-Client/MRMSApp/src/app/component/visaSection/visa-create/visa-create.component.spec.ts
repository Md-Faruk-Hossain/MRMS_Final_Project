import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaCreateComponent } from './visa-create.component';

describe('VisaCreateComponent', () => {
  let component: VisaCreateComponent;
  let fixture: ComponentFixture<VisaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
