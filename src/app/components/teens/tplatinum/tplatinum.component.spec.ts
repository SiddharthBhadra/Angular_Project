import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TplatinumComponent } from './tplatinum.component';

describe('TplatinumComponent', () => {
  let component: TplatinumComponent;
  let fixture: ComponentFixture<TplatinumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TplatinumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TplatinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
