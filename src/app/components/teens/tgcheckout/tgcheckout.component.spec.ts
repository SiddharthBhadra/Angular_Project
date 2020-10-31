import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgcheckoutComponent } from './tgcheckout.component';

describe('TgcheckoutComponent', () => {
  let component: TgcheckoutComponent;
  let fixture: ComponentFixture<TgcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
