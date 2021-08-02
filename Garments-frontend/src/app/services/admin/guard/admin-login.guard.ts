import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate, CanActivateChild {
  constructor(private admin:AdminService, private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.admin.getJwt())
      return true;
    else
      return this.router.parseUrl('/login/admin');
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.admin.getJwt())
      return true;
    else
      return this.router.parseUrl('/login/admin');
  }
  
}
