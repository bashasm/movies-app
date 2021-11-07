export const LOAD_POPULAR_MOVIES = "LOAD_POPULAR_MOVIES";
export const LOAD_MOVIES_LIST = "LOAD_MOVIES_LIST";
export const LOAD_MOVIE_DETAIL = "LOAD_MOVIE_DETAIL";
export const LOAD_MOVIE_CAST_DETAIL = "LOAD_MOVIE_CAST_DETAIL";
export const RESET = "RESET";
export const RESET_MOVIE_DETAIL = "RESET_MOVIE_DETAIL";

export function loadPopularMovies(payload) {
  return {
    type: LOAD_POPULAR_MOVIES,
    payload,
  };
}

export function loadMoviesList(payload) {
  return {
    type: LOAD_MOVIES_LIST,
    payload,
  };
}

export function loadMovieDetail(payload) {
  return {
    type: LOAD_MOVIE_DETAIL,
    payload,
  };
}

export function loadMovieCasts(payload) {
  return {
    type: LOAD_MOVIE_CAST_DETAIL,
    payload,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function resetMovieDetail() {
  return {
    type: RESET_MOVIE_DETAIL,
  };
}
