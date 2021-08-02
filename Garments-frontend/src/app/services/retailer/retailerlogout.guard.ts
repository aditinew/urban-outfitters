import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RetailerService } from './retailer.service';

@Injectable({
    providedIn: 'root'
})
export class RetailerlogoutGuard implements CanActivate, CanActivateChild {
    constructor(private retailer: RetailerService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.retailer.getJwt())
            return this.router.parseUrl('/');
        else
            return true;
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.retailer.getJwt())
            return this.router.parseUrl('/');
        else
            return true;
    }

}
