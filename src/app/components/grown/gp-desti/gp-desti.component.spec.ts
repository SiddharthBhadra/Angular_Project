import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpDestiComponent } from './gp-desti.component';

describe('GpDestiComponent', () => {
  let component: GpDestiComponent;
  let fixture: ComponentFixture<GpDestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpDestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpDestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
