import { IMovies } from "../interfaces/interfaces";
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

const PaginationContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const PagingButton = styled.button`
  color: #fff;
  background-color: #3f51b5;
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 8px;
  &:hover {
    background-color: #2c3d9c;
  }
`;

const PagingNumber = styled.span`
  display: inline-block;
  margin: 0 15px;
`;

function MoviesList({ page, results, total_pages, total_results }: IMovies) {
  return (
    <MoviesListContainer>
      <MoviesListStyled>
        {results?.map((movie) => (
          <MoviesListItemStyled className="movie" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <div>{movie.title}</div>
          </MoviesListItemStyled>
        ))}
      </MoviesListStyled>
      <PaginationContainer>
        <PagingButton>Previous</PagingButton>
        <PagingNumber>{page}</PagingNumber>
        <PagingButton>Next</PagingButton>
      </PaginationContainer>
    </MoviesListContainer>
  );
}

export default MoviesList;
