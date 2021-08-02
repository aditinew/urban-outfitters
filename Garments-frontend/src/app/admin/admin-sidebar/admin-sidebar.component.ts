import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

    constructor(private admin: AdminService, private router: Router) { }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) { // stackoverflow link : https://stackoverflow.com/questions/59354031/how-to-run-a-function-when-a-route-changes-in-angular
                // console.log(event.url)
                this.closeNav();
            }
        })

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
            x[i].style.display = "block";
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
            x[i].style.display = "none";
        }

    }

    logout() {
        this.admin.removeJwt();
    }

}
