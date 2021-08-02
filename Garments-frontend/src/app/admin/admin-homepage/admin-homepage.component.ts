import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss']
})
export class AdminHomepageComponent implements OnInit {
  tempVal = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setTempVal(val){
    console.log(val)
    this.tempVal = val;
  }

}

