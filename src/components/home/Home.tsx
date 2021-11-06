import { useContext } from "react";
import { StateContext } from "../../context/GlobalState";
import MoviesList from "../movies/MoviesList";

const Home: React.FC = () => {
  const { productsState } = useContext(StateContext);
  const { popularMovies } = productsState;
  console.log(popularMovies);

  return <div>{popularMovies && <MoviesList {...popularMovies} />}</div>;
};

export default Home;
