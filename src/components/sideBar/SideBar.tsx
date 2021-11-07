import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import home_cinema from "../../assets/home_cinema.svg";
import { StateContext } from "../../context/GlobalState";

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
  const { moviesState } = useContext(StateContext);
  console.log("[SideBar]");
  const { moviesList } = moviesState;

  return (
    <SidebarContainer>
      <HomeContainer>
        <Link to="/">
          <img src={home_cinema} />
        </Link>
      </HomeContainer>
      <CategoriesContainer>
        <CategoriesGenresHeading>Categories</CategoriesGenresHeading>
        <CategoriesGenresItem>Popular</CategoriesGenresItem>
        <CategoriesGenresItem>Top Rated</CategoriesGenresItem>
        <CategoriesGenresItem>Upcoming</CategoriesGenresItem>
      </CategoriesContainer>
      <GenresContainer>
        <CategoriesGenresHeading>Genres</CategoriesGenresHeading>
        <div>
          {moviesList.map((movie) => (
            <CategoriesGenresItem key={movie.id}>
              {movie.name}
            </CategoriesGenresItem>
          ))}
        </div>
      </GenresContainer>
    </SidebarContainer>
  );
}

export default SideBar;
