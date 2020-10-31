import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TscheckoutComponent } from './tscheckout.component';

describe('TscheckoutComponent', () => {
  let component: TscheckoutComponent;
  let fixture: ComponentFixture<TscheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TscheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TscheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
