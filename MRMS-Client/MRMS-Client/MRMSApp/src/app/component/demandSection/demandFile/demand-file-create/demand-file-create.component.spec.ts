import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandFileCreateComponent } from './demand-file-create.component';

describe('DemandFileCreateComponent', () => {
  let component: DemandFileCreateComponent;
  let fixture: ComponentFixture<DemandFileCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandFileCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandFileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
