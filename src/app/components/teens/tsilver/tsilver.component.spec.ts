import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsilverComponent } from './tsilver.component';

describe('TsilverComponent', () => {
  let component: TsilverComponent;
  let fixture: ComponentFixture<TsilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsilverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
