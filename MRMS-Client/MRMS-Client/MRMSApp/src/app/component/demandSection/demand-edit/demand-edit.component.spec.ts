import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandEditComponent } from './demand-edit.component';

describe('DemandEditComponent', () => {
  let component: DemandEditComponent;
  let fixture: ComponentFixture<DemandEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
