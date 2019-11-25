import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, first, finalize } from 'rxjs/operators';
import { AppState } from '../../../reducers';
import * as courseActions from '../state/courses.actions';
import { CoursesEntity } from '../state/courses.models';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataResolverService implements Resolve<CoursesEntity> {
  loading = false;
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(courseActions.loadCourses());
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
