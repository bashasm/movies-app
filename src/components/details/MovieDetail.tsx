import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { loadMovieCasts, loadMovieDetail } from "../../context/actions/movies";
import { DispatchContext, StateContext } from "../../context/GlobalState";
import Rating from "../rating/Rating";
import Cast from "./Cast";
import Footer from "./Footer";
import Genres from "./Genres";
import Information from "./Information";
import TimeLangInfo from "./TimeLangInfo";

const MovieDetailContainer = styled.div`
  display: flex;
  flex: 1;
`;

const SidebarContainer = styled.div`
  margin: 10px;
  flex: 1;
`;

const ContentContainer = styled.div`
  margin: 10px;
  flex: 1;
`;

const MovieTitle = styled.div`
  text-transform: uppercase;
  text-shadow: 6px 4px 14px rgb(165 154 135 / 63%);
  text-align: center;
  letter-spacing: 0.01em;
  align-self: center;
  grid-area: title;
  font-size: 30px;
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
`;

const Img = styled.img`
  border-radius: 20px;
  cursor: pointer;
  max-width: fit-content;
  width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.05);
  }
`;

const RatingTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 25px 10px;
`;

const MovieDetail: React.FC = () => {
  let { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const detail = state?.productsState?.movieDetail;
  const movieCasts = state?.productsState?.movieCasts;
  console.log("[MovieDetail]", detail, movieCasts);

  async function fetchMovieDetail() {
    const movieDetail = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e0d07555e20e0345f6bd12869b2604e&append_to_response=videos`
    ).then((res) => res.json());
    dispatch(loadMovieDetail(movieDetail));
  }

  async function fetchCastDetails() {
    const castDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e0d07555e20e0345f6bd12869b2604e`
    ).then((res) => res.json());
    dispatch(loadMovieCasts(castDetails.cast));
  }

  useEffect(() => {
    fetchMovieDetail();
    fetchCastDetails();
  }, [id]);

  return (
    detail && (
      <MovieDetailContainer>
        <SidebarContainer>
          <Img
            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
            alt={detail.title}
          />
        </SidebarContainer>
        <ContentContainer>
          <MovieTitle>{detail.original_title}</MovieTitle>
          <RatingTimeContainer>
            <Rating value={detail.vote_average} />
            <TimeLangInfo
              release_date={detail.release_date}
              runtime={detail.runtime}
              lang={detail.original_language}
            />
          </RatingTimeContainer>
          <Genres genres={detail.genres} />
          <Information information={detail.overview} />
          <Cast cast={movieCasts?.slice(0, 6)} />
          <Footer imdb_id={detail.imdb_id} homepage={detail.homepage} />
        </ContentContainer>
      </MovieDetailContainer>
    )
  );
};

export default MovieDetail;
