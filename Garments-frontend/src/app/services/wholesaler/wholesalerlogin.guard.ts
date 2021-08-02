import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WholesalerService } from './wholesaler.service';

@Injectable({
    providedIn: 'root'
})
export class WholesalerloginGuard implements CanActivate, CanActivateChild {
    constructor(private wholesaler: WholesalerService, private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.wholesaler.getJwt())
            return true;
        else
            return this.router.parseUrl('/login/wholesaler');
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.wholesaler.getJwt())
            return true;
        else
            return this.router.parseUrl('/login/wholesaler');
    }

}
