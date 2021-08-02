import { Component, OnInit, OnDestroy } from '@angular/core';
import { RetailerService } from '../services/retailer/retailer.service';

@Component({
  selector: 'app-indexafterloginheader',
  templateUrl: './indexafterloginheader.component.html',
  styleUrls: ['./indexafterloginheader.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class IndexafterloginheaderComponent implements OnInit {
  screenWidth;
  profileBoxShow: boolean = false;
    retialerLoginBool = false;

    constructor(private retailer: RetailerService) { }

  ngOnInit(): void {
        this.checkLogin()
        window.addEventListener("storage", this.checkLogin)
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth)
  }

    checkLogin() {
        this.retialerLoginBool = !!this.retailer.getJwt();
    }

    ngOnDestroy() {
        window.removeEventListener("storage", this.checkLogin)
    }

    logout() {
        this.retailer.removeJwt();
    }


  onResize(event){
    this.screenWidth = window.innerWidth;
   }



  toggleProfilebox() {
    this.profileBoxShow = !this.profileBoxShow;
    console.log(this.profileBoxShow);
  }

}
