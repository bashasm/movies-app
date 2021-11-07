import { loadPopularMovies } from "../actions/movies";

export async function loadPopularMovieAsync(history, dispatch, url) {
  if (location.pathname !== "/") {
    // re route to main page
    history.push("/");
  }
  const movies = await fetch(url).then((res) => res.json());
  dispatch(loadPopularMovies(movies));
}
