import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpcheckoutComponent } from './gpcheckout.component';

describe('GpcheckoutComponent', () => {
  let component: GpcheckoutComponent;
  let fixture: ComponentFixture<GpcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
