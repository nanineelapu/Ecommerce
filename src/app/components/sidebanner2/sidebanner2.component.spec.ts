import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebanner2Component } from './sidebanner2.component';

describe('Sidebanner2Component', () => {
  let component: Sidebanner2Component;
  let fixture: ComponentFixture<Sidebanner2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sidebanner2Component]
    });
    fixture = TestBed.createComponent(Sidebanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
