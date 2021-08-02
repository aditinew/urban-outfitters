import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexdashboard',
  templateUrl: './indexdashboard.component.html',
  styleUrls: ['./indexdashboard.component.scss']
})
export class IndexdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("hamburger").style.opacity = "0";
    document.getElementById('close').style.opacity = "1";
    var x, i;
    x = document.querySelectorAll(".Itemname");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "1";
    }

  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "37px";
    document.getElementById('close').style.opacity = "0";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("hamburger").style.opacity = "1";
    var x, i;
    x = document.querySelectorAll(".Itemname");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";
    }

  }
}
