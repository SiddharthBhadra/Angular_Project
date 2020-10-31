import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsDestiComponent } from './gs-desti.component';

describe('GsDestiComponent', () => {
  let component: GsDestiComponent;
  let fixture: ComponentFixture<GsDestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsDestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsDestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
