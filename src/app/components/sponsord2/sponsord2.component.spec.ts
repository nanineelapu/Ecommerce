import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sponsord2Component } from './sponsord2.component';

describe('Sponsord2Component', () => {
  let component: Sponsord2Component;
  let fixture: ComponentFixture<Sponsord2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sponsord2Component]
    });
    fixture = TestBed.createComponent(Sponsord2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
