import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadPopularMovies, reset } from "../../context/actions/movies";
import { DispatchContext, StateContext } from "../../context/GlobalState";
import Loader from "../loader/Loader";
import MoviesList from "../movies/MoviesList";

const GenresMovies: React.FC = () => {
  let { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const { moviesState } = useContext(StateContext);
  const { isLoading, popularMovies } = moviesState;
  console.log("[GenresMovies]");

  async function fetchData(id) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4e0d07555e20e0345f6bd12869b2604e&with_genres=${id}&page=1`
    ).then((res) => res.json());
    console.log(res);
    dispatch(loadPopularMovies(res));
  }

  useEffect(() => {
    // fetch data
    fetchData(id);
  }, [id]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && popularMovies && <MoviesList {...popularMovies} />}
    </div>
  );
};

export default GenresMovies;
