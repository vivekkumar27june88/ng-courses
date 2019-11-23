import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IFeaturedMovies } from '../model/featured-movies';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturedMoviesDataResolverService
  implements Resolve<IFeaturedMovies> {
  constructor(private moviesService: MoviesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.moviesService.getAllFeaturedMovies();
  }
}
