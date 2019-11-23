import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModuleImportModule } from '../material-module-import/material-module-import.module';
import { FeaturedMoviesComponent } from './component/featured-movies/featured-movies.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { MovieComponent } from './component/movie/movie.component';
import { PopularMoviesComponent } from './component/popular-movies/popular-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieComponent,
    FeaturedMoviesComponent,
    PopularMoviesComponent,
    MovieDetailsComponent
  ],
  imports: [CommonModule, MoviesRoutingModule, MaterialModuleImportModule],
  exports: [MovieComponent, FeaturedMoviesComponent, PopularMoviesComponent, MovieDetailsComponent]
})
export class MoviesModule {}
