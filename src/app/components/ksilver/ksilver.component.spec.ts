import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KsilverComponent } from './ksilver.component';

describe('KsilverComponent', () => {
  let component: KsilverComponent;
  let fixture: ComponentFixture<KsilverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KsilverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KsilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
