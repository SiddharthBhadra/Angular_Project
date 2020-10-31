import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GgcheckoutComponent } from './ggcheckout.component';

describe('GgcheckoutComponent', () => {
  let component: GgcheckoutComponent;
  let fixture: ComponentFixture<GgcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
