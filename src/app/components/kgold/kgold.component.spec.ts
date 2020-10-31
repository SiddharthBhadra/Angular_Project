import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KgoldComponent } from './kgold.component';

describe('KgoldComponent', () => {
  let component: KgoldComponent;
  let fixture: ComponentFixture<KgoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KgoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KgoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
