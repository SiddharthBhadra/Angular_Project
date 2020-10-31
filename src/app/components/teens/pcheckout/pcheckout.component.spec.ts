import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcheckoutComponent } from './pcheckout.component';

describe('PcheckoutComponent', () => {
  let component: PcheckoutComponent;
  let fixture: ComponentFixture<PcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
