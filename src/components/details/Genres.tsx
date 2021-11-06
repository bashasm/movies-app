import GenreItem from "./GenreItem";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const GenreTitleContainer = styled.div`
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-size: 21px;
`;

const GenreListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

function Genres({ genres }) {
  let history = useHistory();

  function onClick(id) {
    history.push(`/genres/${id}`);
  }

  return (
    <>
      <GenreTitleContainer>Genres:</GenreTitleContainer>
      <GenreListContainer>
        {genres.map((genre) => (
          <GenreItem
            key={genre.id}
            name={genre.name}
            onClick={() => onClick(genre.id)}
          />
        ))}
      </GenreListContainer>
    </>
  );
}

export default Genres;
