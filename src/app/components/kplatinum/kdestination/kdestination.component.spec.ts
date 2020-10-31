import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KdestinationComponent } from './kdestination.component';

describe('KdestinationComponent', () => {
  let component: KdestinationComponent;
  let fixture: ComponentFixture<KdestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KdestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KdestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
