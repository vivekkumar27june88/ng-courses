import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IPopularMovies } from '../model/popular-movies';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class PopularMoviesDataResolverService
  implements Resolve<IPopularMovies> {
  constructor(private moviesService: MoviesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.moviesService.getAllFeaturedMovies();
  }
}
