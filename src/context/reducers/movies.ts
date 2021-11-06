import { LOAD_MOVIES_LIST, LOAD_POPULAR_MOVIES } from "../actions/movies";

export const productsInitialState = { popularMovies: {}, moviesList: [] };

// reducer
export default (state, action) => {
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
    default:
      return state;
  }
};
