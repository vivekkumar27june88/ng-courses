import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { CreateAccountComponent } from '../components/create-account/create-account.component';

@Injectable({ providedIn: 'root' })
export class AccountCreateGuard
  implements CanDeactivate<CreateAccountComponent> {
  canDeactivate(
    component: CreateAccountComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (component.hasLocalModification()) {
      return window.confirm(
        'Navigation will lose all the changes, Are you sure?'
      );
    }

    return true;
  }
}
