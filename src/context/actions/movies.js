export const LOAD_POPULAR_MOVIES = "LOAD_POPULAR_MOVIES";
export const LOAD_MOVIES_LIST = "LOAD_MOVIES_LIST";

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
