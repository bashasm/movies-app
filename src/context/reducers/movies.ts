import { IMoviesState } from "../../components/interfaces/interfaces";
import {
  LOAD_MOVIES_LIST,
  LOAD_MOVIE_CAST_DETAIL,
  LOAD_MOVIE_DETAIL,
  LOAD_POPULAR_MOVIES,
} from "../actions/movies";

export const productsInitialState: IMoviesState = {
  popularMovies: null,
  moviesList: [],
  movieDetail: null,
  movieCasts: [],
};

// reducer
export default (state, action): IMoviesState => {
  console.log("reducer", action.type);
  switch (action.type) {
    case LOAD_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };

    case LOAD_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.payload,
      };

    case LOAD_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };

    case LOAD_MOVIE_CAST_DETAIL:
      return {
        ...state,
        movieCasts: action.payload,
      };

    default:
      return state;
  }
};
