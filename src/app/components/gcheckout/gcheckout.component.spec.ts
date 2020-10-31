import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcheckoutComponent } from './gcheckout.component';

describe('GcheckoutComponent', () => {
  let component: GcheckoutComponent;
  let fixture: ComponentFixture<GcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
