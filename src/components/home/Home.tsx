import { useContext } from "react";
import { StateContext } from "../../context/GlobalState";
import Loader from "../loader/Loader";
import MoviesList from "../movies/MoviesList";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Home: React.FC = () => {
  const { moviesState } = useContext(StateContext);
  const { isLoading, popularMovies } = moviesState;
  console.log("[Home]");

  return (
    <HomeContainer>
      {isLoading && <Loader />}
      {!isLoading && popularMovies && <MoviesList {...popularMovies} />}
    </HomeContainer>
  );
};

export default Home;
