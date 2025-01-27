import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebannerComponent } from './sidebanner.component';

describe('SidebannerComponent', () => {
  let component: SidebannerComponent;
  let fixture: ComponentFixture<SidebannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebannerComponent]
    });
    fixture = TestBed.createComponent(SidebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
