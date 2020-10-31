import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GDestiComponent } from './g-desti.component';

describe('GDestiComponent', () => {
  let component: GDestiComponent;
  let fixture: ComponentFixture<GDestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
