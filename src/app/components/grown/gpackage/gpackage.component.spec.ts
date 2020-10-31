import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpackageComponent } from './gpackage.component';

describe('GpackageComponent', () => {
  let component: GpackageComponent;
  let fixture: ComponentFixture<GpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
