import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services';

@Component({
  selector: 'ng-courses-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.scss']
})
export class FeaturedMoviesComponent implements OnInit {
  public featuredMovies: any = {};

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    /* this.moviesService
      .getAllFeaturedMovies()
      .subscribe(featuredMoviesSucRes => {
        this.featuredMovies = featuredMoviesSucRes;
      }); */
    this.featuredMovies = this.activatedRoute.parent.snapshot.data[
      'featuredMovies'
    ];
  }

  ngOnInit() {
    /* this.activatedRoute.parent.data.subscribe(data => {
      this.featuredMovies = data.featuredMovies;
    }); */
  }

  getIconUrl(movie: any): string {
    const retVal = `url('${this.featuredMovies.iconBaseUrl}${movie.backdrop_path}')`;
    console.log({ retVal });
    return retVal;
  }
}
