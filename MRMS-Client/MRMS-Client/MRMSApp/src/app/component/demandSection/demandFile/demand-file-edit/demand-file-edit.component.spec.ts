import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandFileEditComponent } from './demand-file-edit.component';

describe('DemandFileEditComponent', () => {
  let component: DemandFileEditComponent;
  let fixture: ComponentFixture<DemandFileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandFileEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandFileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
