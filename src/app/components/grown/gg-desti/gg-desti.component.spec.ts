import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GgDestiComponent } from './gg-desti.component';

describe('GgDestiComponent', () => {
  let component: GgDestiComponent;
  let fixture: ComponentFixture<GgDestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GgDestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GgDestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
