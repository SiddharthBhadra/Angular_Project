import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GscheckoutComponent } from './gscheckout.component';

describe('GscheckoutComponent', () => {
  let component: GscheckoutComponent;
  let fixture: ComponentFixture<GscheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
