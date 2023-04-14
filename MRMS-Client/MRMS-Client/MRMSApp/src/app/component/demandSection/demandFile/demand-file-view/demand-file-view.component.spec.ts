import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandFileViewComponent } from './demand-file-view.component';

describe('DemandFileViewComponent', () => {
  let component: DemandFileViewComponent;
  let fixture: ComponentFixture<DemandFileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandFileViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
