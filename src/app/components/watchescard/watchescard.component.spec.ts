import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchescardComponent } from './watchescard.component';

describe('WatchescardComponent', () => {
  let component: WatchescardComponent;
  let fixture: ComponentFixture<WatchescardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchescardComponent]
    });
    fixture = TestBed.createComponent(WatchescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
