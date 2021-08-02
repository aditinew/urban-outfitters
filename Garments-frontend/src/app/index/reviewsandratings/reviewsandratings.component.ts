import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewsandratings',
  templateUrl: './reviewsandratings.component.html',
  styleUrls: ['./reviewsandratings.component.scss']
})
export class ReviewsandratingsComponent implements OnInit {
  cardWidth = 0;
  currentSlidePosition = 0;
  ReviewCardsContainer;
  constructor() { }

  ngOnInit(): void {
    this.reviewCardAutoSlider()
  }



  reviewCardAutoSlider() {

    let sliderContainervar = document.getElementById("cardslidercontainer");

    let totalcardcount = sliderContainervar.childElementCount;

    this.cardWidth = document.getElementById("cards").clientWidth;


    this.ReviewCardsContainer = document.getElementById("ReviewCardsContainer");

    this.currentSlidePosition = this.currentSlidePosition + this.cardWidth;

    console.log(`${this.currentSlidePosition}px`, "dfghj");

    this.ReviewCardsContainer.style.transform = "translateX(`${this.currentSlidePosition}px`)";

    console.log(totalcardcount, this.cardWidth, "slider");


  }
}
