import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookiesGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) { }

  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['/', 'login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.cookieService.check('access_token');
    this.redirect(token);
    return token;
  }
}
