import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverDestiComponent } from './silver-desti.component';

describe('SilverDestiComponent', () => {
  let component: SilverDestiComponent;
  let fixture: ComponentFixture<SilverDestiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverDestiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverDestiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
