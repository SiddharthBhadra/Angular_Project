import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpackageComponent } from './tpackage.component';

describe('TpackageComponent', () => {
  let component: TpackageComponent;
  let fixture: ComponentFixture<TpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
