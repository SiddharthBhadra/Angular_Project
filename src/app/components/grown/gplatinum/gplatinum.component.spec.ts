import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GplatinumComponent } from './gplatinum.component';

describe('GplatinumComponent', () => {
  let component: GplatinumComponent;
  let fixture: ComponentFixture<GplatinumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GplatinumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GplatinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
