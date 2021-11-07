import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loadPopularMovies } from "../../context/actions/movies";
import { DispatchContext } from "../../context/GlobalState";
import { IMovies } from "../interfaces/interfaces";

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
  &:disabled {
    background-color: gray;
  }
`;

const PagingNumber = styled.span`
  display: inline-block;
  margin: 0 15px;
`;

function MoviesList({ page, results, total_pages, total_results }: IMovies) {
  const dispatch = useContext(DispatchContext);

  async function fetchPopularMovies(page) {
    let url = "";
    if (location.pathname.startsWith("/genres")) {
      const arr = location.pathname.split("/");
      const id = arr[arr.length - 1];
      url = `https://api.themoviedb.org/3/discover/movie?api_key=4e0d07555e20e0345f6bd12869b2604e&with_genres=${id}&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=4e0d07555e20e0345f6bd12869b2604e&page=${page}`;
    }

    const movies = await fetch(url).then((res) => res.json());
    dispatch(loadPopularMovies(movies));
  }

  function onPage(page) {
    fetchPopularMovies(page);
  }

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
        <PagingButton disabled={page <= 1} onClick={() => onPage(page - 1)}>
          Previous
        </PagingButton>
        <PagingNumber>{page}</PagingNumber>
        <PagingButton
          disabled={page >= total_pages}
          onClick={() => onPage(page + 1)}
        >
          Next
        </PagingButton>
      </PaginationContainer>
    </MoviesListContainer>
  );
}

export default MoviesList;
