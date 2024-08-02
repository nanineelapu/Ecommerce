import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtitleComponent } from './cardtitle.component';

describe('CardtitleComponent', () => {
  let component: CardtitleComponent;
  let fixture: ComponentFixture<CardtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardtitleComponent]
    });
    fixture = TestBed.createComponent(CardtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
