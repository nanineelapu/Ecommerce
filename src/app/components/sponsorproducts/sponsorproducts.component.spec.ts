import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorproductsComponent } from './sponsorproducts.component';

describe('SponsorproductsComponent', () => {
  let component: SponsorproductsComponent;
  let fixture: ComponentFixture<SponsorproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorproductsComponent]
    });
    fixture = TestBed.createComponent(SponsorproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
