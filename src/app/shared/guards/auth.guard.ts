import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AuthenticationService } from '../../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthenticationService, private router: Router) {

  }
  //noinspection TypeScriptUnresolvedVariable
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| Promise<boolean>|boolean {

    if (this.authService.getCurrentUser() != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
