import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, loadFn: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload === true) {
      return loadFn();
    }

    return of(null);
  }
  constructor() {}
}
