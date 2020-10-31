import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgoldComponent } from './tgold.component';

describe('TgoldComponent', () => {
  let component: TgoldComponent;
  let fixture: ComponentFixture<TgoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
