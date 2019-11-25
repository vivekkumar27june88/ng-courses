import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppState } from '../../../reducers';
import * as fromAuthSelectors from '../reducers/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /* const accessToken = window.sessionStorage.getItem('accessToken');
    if (!accessToken) {
      this.router.navigate(['/landing']);
      return false;
    } */

    /* return this.store.pipe(
      tap(appState => console.log({ appState })),
      map(appState => !!appState['auth']['user']),
      tap(isLoggedIn => {
        console.log({ isLoggedIn });
        if (!isLoggedIn) {
          this.router.navigate(['/landing']);
        }
      })
    ); */

    return this.store.pipe(
      select(fromAuthSelectors.isLoggedIn),
      tap(isLoggedIn => {
        console.log({ isLoggedIn });
        if (!isLoggedIn) {
          this.router.navigate(['/landing']);
        }
      })
    );

    return of(true);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    const accessToken = window.sessionStorage.getItem('accessToken');
    if (!accessToken) {
      this.router.navigate(['/landing']);
      return false;
    }
    return true;
  }
}
