import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sponsord1Component } from './sponsord1.component';

describe('Sponsord1Component', () => {
  let component: Sponsord1Component;
  let fixture: ComponentFixture<Sponsord1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sponsord1Component]
    });
    fixture = TestBed.createComponent(Sponsord1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
