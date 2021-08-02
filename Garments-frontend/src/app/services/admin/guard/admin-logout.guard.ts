import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLogoutGuard implements CanActivate, CanActivateChild {
  constructor(private admin:AdminService, private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.admin.getJwt())
      return this.router.parseUrl('/admin/category/add');
    else
      return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.admin.getJwt())
      return this.router.parseUrl('/admin/category/add');
    else
      return true;
  }
  
}
