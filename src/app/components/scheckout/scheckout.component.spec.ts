import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheckoutComponent } from './scheckout.component';

describe('ScheckoutComponent', () => {
  let component: ScheckoutComponent;
  let fixture: ComponentFixture<ScheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
