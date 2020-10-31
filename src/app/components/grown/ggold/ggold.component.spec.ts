import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GgoldComponent } from './ggold.component';

describe('GgoldComponent', () => {
  let component: GgoldComponent;
  let fixture: ComponentFixture<GgoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
