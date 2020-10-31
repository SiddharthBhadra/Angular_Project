import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldDestiComponent } from './gold-desti.component';

describe('GoldDestiComponent', () => {
  let component: GoldDestiComponent;
  let fixture: ComponentFixture<GoldDestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldDestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldDestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
