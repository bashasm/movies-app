import { useContext } from "react";
import { StateContext } from "../../context/GlobalState";
import MoviesList from "../movies/MoviesList";

const Home: React.FC = () => {
  const { moviesState } = useContext(StateContext);
  const { popularMovies } = moviesState;
  console.log(popularMovies);

  return <div>{popularMovies && <MoviesList {...popularMovies} />}</div>;
};

export default Home;
