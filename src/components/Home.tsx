import { useContext } from "react";
import { StateContext } from "../context/GlobalState";
import MoviesList from "./Movies/MoviesList";

function Home() {
  const { productsState } = useContext(StateContext);
  const { popularMovies } = productsState;

  return (
    <div>
      <MoviesList {...popularMovies} />
    </div>
  );
}

export default Home;
