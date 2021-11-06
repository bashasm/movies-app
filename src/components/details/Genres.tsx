import GenreItem from "./GenreItem";

import styled from "styled-components";

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
  return (
    <>
      <GenreTitleContainer>Genres:</GenreTitleContainer>
      <GenreListContainer>
        {genres.map((genre) => (
          <GenreItem key={genre.id} name={genre.name} />
        ))}
      </GenreListContainer>
    </>
  );
}

export default Genres;
