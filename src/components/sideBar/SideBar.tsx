import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import home_cinema from "../../assets/home_cinema.svg";
import { loadPopularMovieAsync } from "../../context/async-actions/movies";
import { DispatchContext, StateContext } from "../../context/GlobalState";
import { useHistory } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
  img {
    width: 50%;
    margin-left: 25%;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  padding: 10% 0;
  justify-content: center;
`;

const CategoriesContainer = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

const GenresContainer = styled.div`
  height: calc(100% - 360px);
  overflow: auto;
  display: block;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

const CategoriesGenresHeading = styled.div`
  color: rgba(0, 0, 0, 0.54);
  padding: 10px;
  font-size: 0.875rem;
`;

const CategoriesGenresItem = styled.div`
  cursor: pointer;
  padding: 20px 10px;
  &:hover {
    background: rgb(240, 234, 234);
  }
`;

function SideBar() {
  const history = useHistory();
  const { moviesState } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { moviesList } = moviesState;

  console.log("[SideBar]");

  function onPopularClick() {
    loadPopularMovieAsync(
      history,
      dispatch,
      `https://api.themoviedb.org/3/movie/popular?api_key=4e0d07555e20e0345f6bd12869b2604e&page=1`
    );
  }

  function onTopRatedClick() {
    loadPopularMovieAsync(
      history,
      dispatch,
      `https://api.themoviedb.org/3/movie/top_rated?api_key=4e0d07555e20e0345f6bd12869b2604e&page=1`
    );
  }

  function onUpComingClick() {
    loadPopularMovieAsync(
      history,
      dispatch,
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4e0d07555e20e0345f6bd12869b2604e&page=1`
    );
  }

  function onGenreClick(id) {
    loadPopularMovieAsync(
      history,
      dispatch,
      `https://api.themoviedb.org/3/discover/movie?api_key=4e0d07555e20e0345f6bd12869b2604e&with_genres=${id}&page=1`
    );
  }

  return (
    <SidebarContainer>
      <HomeContainer>
        <Link to="/">
          <img src={home_cinema} />
        </Link>
      </HomeContainer>
      <CategoriesContainer>
        <CategoriesGenresHeading>Categories</CategoriesGenresHeading>
        <CategoriesGenresItem onClick={onPopularClick}>
          Popular
        </CategoriesGenresItem>
        <CategoriesGenresItem onClick={onTopRatedClick}>
          Top Rated
        </CategoriesGenresItem>
        <CategoriesGenresItem onClick={onUpComingClick}>
          Upcoming
        </CategoriesGenresItem>
      </CategoriesContainer>
      <GenresContainer>
        <CategoriesGenresHeading>Genres</CategoriesGenresHeading>
        <div>
          {moviesList.map((movie) => (
            <CategoriesGenresItem
              key={movie.id}
              onClick={() => onGenreClick(movie.id)}
            >
              {movie.name}
            </CategoriesGenresItem>
          ))}
        </div>
      </GenresContainer>
    </SidebarContainer>
  );
}

export default SideBar;
