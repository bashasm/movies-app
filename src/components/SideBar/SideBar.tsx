import { useContext } from "react";
import { StateContext } from "../../context/GlobalState";
import "./sideBar.css";
import home_cinema from "../../assets/home_cinema.svg";

function SideBar() {
  const { productsState } = useContext(StateContext);
  console.log("[SideBar]", productsState);
  const { moviesList } = productsState;

  return (
    <div className="sidebar">
      <div className="home-container">
        <img src={home_cinema} />
      </div>
      <div className="categories">
        <div className="categories-heading">Categories</div>
        <div className="categories-item">Popular</div>
        <div className="categories-item">Top Rated</div>
        <div className="categories-item">Upcoming</div>
      </div>
      <div className="genres">
        <div className="genre-list-heading">Genres</div>
        <div className="genre-list">
          {moviesList.map((movie) => (
            <div className="genre-item" key={movie.id}>
              {movie.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
