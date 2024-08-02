import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepageComponent } from './prepage.component';

describe('PrepageComponent', () => {
  let component: PrepageComponent;
  let fixture: ComponentFixture<PrepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrepageComponent]
    });
    fixture = TestBed.createComponent(PrepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
