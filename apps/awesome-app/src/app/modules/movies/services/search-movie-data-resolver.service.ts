import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MoviesService } from './movies.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieDataResolverService implements Resolve<any> {
  constructor(private moviesService: MoviesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const movieId = +route.paramMap.get('movieId');
    return this.moviesService.getMovieDetailsById(movieId).pipe(
      catchError(e =>
        of({
          data: {},
          error: { msg: 'Invalid movie Id' }
        })
      )
    );
  }
}
