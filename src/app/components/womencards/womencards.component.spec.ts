import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomencardsComponent } from './womencards.component';

describe('WomencardsComponent', () => {
  let component: WomencardsComponent;
  let fixture: ComponentFixture<WomencardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomencardsComponent]
    });
    fixture = TestBed.createComponent(WomencardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
