import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import home_cinema from "../../assets/home_cinema.svg";
import { StateContext } from "../../context/GlobalState";
import "./sideBar.css";

const GenresContainer = styled.div`
  height: calc(100% - 360px);
  overflow: auto;
  display: block;
`;

function SideBar() {
  const { moviesState } = useContext(StateContext);
  console.log("[SideBar]");
  const { moviesList } = moviesState;

  return (
    <div className="sidebar">
      <div className="home-container">
        <Link to="/">
          <img src={home_cinema} />
        </Link>
      </div>
      <div className="categories">
        <div className="categories-heading">Categories</div>
        <div className="categories-item">Popular</div>
        <div className="categories-item">Top Rated</div>
        <div className="categories-item">Upcoming</div>
      </div>
      <GenresContainer className="genres">
        <div className="genre-list-heading">Genres</div>
        <div className="genre-list">
          {moviesList.map((movie) => (
            <div className="genre-item" key={movie.id}>
              {movie.name}
            </div>
          ))}
        </div>
      </GenresContainer>
    </div>
  );
}

export default SideBar;
