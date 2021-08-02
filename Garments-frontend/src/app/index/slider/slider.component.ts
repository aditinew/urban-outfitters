import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  i = 0;
  val;
  interval

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => this.slideImage(), 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  slideImage() {
    this.i = this.i + 1;
    const totalElements = document.getElementById("imagePos").childNodes.length;
    console.log(totalElements)
    if ((this.i < (totalElements)) && (this.i >= 0)) {
      const widthVal = -(this.i * 100);
      console.log(widthVal);
      document.getElementById('imagePos').style.transform = `translateX(${widthVal}vw)`;
      document.getElementById('imagePos').style.transition = "all ease-in-out 1s";
    }
    else {
      this.i = -1;
    }
  }

  slideToPos(val) {
    this.i = val;
    console.log(this.i)
    const widthVal = -(this.i * 100);
    console.log(widthVal);
    document.getElementById('imagePos').style.transform = `translateX(${widthVal}vw)`;
    document.getElementById('imagePos').style.transition = "all ease-in-out 1s";
  }


}
