import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private _authservice: AuthService, private router: Router) {}

  canActivate(): boolean {
    let user = this._authservice.checkPermission();
    if (user) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }

  canLoad(): boolean {
    return true;
  }
}
