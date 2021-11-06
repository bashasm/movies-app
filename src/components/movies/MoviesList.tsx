import { IPopularMovies } from "../interfaces/interfaces";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MoviesListContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const MoviesListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MoviesListItemStyled = styled.div`
  padding: 5px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Img = styled.img`
  border-radius: 20px;
  cursor: pointer;
  height: 250px;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.05);
  }
`;

function MoviesList({
  page,
  results,
  total_pages,
  total_results,
}: IPopularMovies) {
  console.log("[MoviesList]", page, results, total_pages, total_results);

  return (
    <MoviesListContainer>
      <MoviesListStyled>
        {results?.map((movie) => (
          <MoviesListItemStyled className="movie" key={movie.id}>
            <Link to={`movie/${movie.id}`}>
              <Img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <div>{movie.title}</div>
          </MoviesListItemStyled>
        ))}
      </MoviesListStyled>
      <div className="pagination">
        <button>Previous</button>
        {page}
        <button>Next</button>
      </div>
    </MoviesListContainer>
  );
}

export default MoviesList;
