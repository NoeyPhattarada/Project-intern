import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsureHealthDetails } from './insure-health-details';

describe('InsureHealthDetails', () => {
  let component: InsureHealthDetails;
  let fixture: ComponentFixture<InsureHealthDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsureHealthDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsureHealthDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
