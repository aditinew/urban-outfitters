import { Component, OnInit, OnDestroy } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer/retailer.service';

@Component({
    selector: 'app-headernavlinks',
    templateUrl: './headernavlinks.component.html',
    styleUrls: ['./headernavlinks.component.scss']
})
export class HeadernavlinksComponent implements OnInit, OnDestroy {

    retialerLoginBool = false;

    constructor(private retailer: RetailerService) { }

    ngOnInit(): void {
        this.checkLogin()
        window.addEventListener("storage", this.checkLogin)
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

}
