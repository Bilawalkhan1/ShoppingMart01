import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  returnUrl: string = null

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('token')) {
          // logged in so return true
          return true;
      }

      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }})
      return false;
  }
}