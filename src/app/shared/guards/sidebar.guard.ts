import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../services/authentication.service';
/**
 * Created by Sanja on 19.6.2017..
 */

@Injectable()
export  class  SidebarGuard implements CanActivate{

  constructor (private authService: AuthenticationService, private router: Router) {

  }
  //noinspection TypeScriptUnresolvedVariable
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| Promise<boolean>|boolean {

    if (this.authService.getCurrentUser() != null) {
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true;
    }
  }

}
