import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KplatinumComponent } from './kplatinum.component';

describe('KplatinumComponent', () => {
  let component: KplatinumComponent;
  let fixture: ComponentFixture<KplatinumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KplatinumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KplatinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
