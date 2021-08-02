import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WholesalerService } from './wholesaler.service';

@Injectable({
    providedIn: 'root'
})
export class WholesalerlogoutGuard implements CanActivate, CanActivateChild {
    constructor(private wholesaler: WholesalerService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.wholesaler.getJwt())
            return this.router.parseUrl('/wholesaler');
        else
            return true;
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.wholesaler.getJwt())
            return this.router.parseUrl('/wholesaler');
        else
            return true;
    }

}
