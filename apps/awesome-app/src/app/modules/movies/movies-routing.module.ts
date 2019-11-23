import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedMoviesComponent } from './component/featured-movies/featured-movies.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieComponent } from './component/movie/movie.component';
import { PopularMoviesComponent } from './component/popular-movies/popular-movies.component';
import { FeaturedMoviesDataResolverService } from './services/featured-movies-data-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    resolve: {
      featuredMovies: FeaturedMoviesDataResolverService
    },
    children: [
      {
        path: 'details',
        component: MovieDetailsComponent,
        outlet: 'details'
      },
      {
        path: 'popular-movies',
        component: PopularMoviesComponent
      },
      {
        path: 'featured-movies',
        component: FeaturedMoviesComponent
      },
      {
        path: 'search-movies',
        component: MovieListComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'featured-movies'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
