import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDestiComponent } from './p-desti.component';

describe('PDestiComponent', () => {
  let component: PDestiComponent;
  let fixture: ComponentFixture<PDestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
