import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsandratingsComponent } from './reviewsandratings.component';

describe('ReviewsandratingsComponent', () => {
  let component: ReviewsandratingsComponent;
  let fixture: ComponentFixture<ReviewsandratingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsandratingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsandratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
