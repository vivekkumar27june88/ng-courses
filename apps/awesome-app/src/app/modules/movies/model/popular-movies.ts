export interface IMovieInfo {
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<number>;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  media_type: string;
}

export interface IPopularMovies {
  data: {
    page: number;
    results: Array<IMovieInfo>;
    total_pages: number;
    total_results: number;
  };
  imageBaseUrl: string;
}
