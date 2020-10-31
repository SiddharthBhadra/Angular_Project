import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SDestiComponent } from './s-desti.component';

describe('SDestiComponent', () => {
  let component: SDestiComponent;
  let fixture: ComponentFixture<SDestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SDestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
