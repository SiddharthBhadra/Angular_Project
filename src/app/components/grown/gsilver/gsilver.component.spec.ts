import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsilverComponent } from './gsilver.component';

describe('GsilverComponent', () => {
  let component: GsilverComponent;
  let fixture: ComponentFixture<GsilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsilverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
