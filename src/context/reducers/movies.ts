import { IMoviesState } from "../../components/interfaces/interfaces";
import {
  LOAD_MOVIES_LIST,
  LOAD_MOVIE_CAST_DETAIL,
  LOAD_MOVIE_DETAIL,
  LOAD_POPULAR_MOVIES,
  RESET,
  RESET_MOVIE_DETAIL,
} from "../actions/movies";

export const moviesInitialState: IMoviesState = {
  popularMovies: null,
  moviesList: [],
  movieDetail: null,
  movieCasts: [],
  isLoading: true,
};

// reducer
export default (state, action): IMoviesState => {
  console.log("reducer", action.type);
  switch (action.type) {
    case LOAD_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
        isLoading: false,
      };

    case LOAD_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.payload,
        isLoading: false,
      };

    case RESET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: null,
        isLoading: true,
      };

    case LOAD_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
        isLoading: false,
      };

    case LOAD_MOVIE_CAST_DETAIL:
      return {
        ...state,
        movieCasts: action.payload,
        isLoading: false,
      };

    case RESET:
      return {
        ...moviesInitialState,
      };

    default:
      return state;
  }
};
