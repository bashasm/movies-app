import styled from "styled-components";
import { IMovieCast } from "../interfaces/interfaces";

const Img = styled.img`
  width: 3.4em;
  height: 3.4em;
  border-radius: 10px;
  object-fit: cover;
  background-color: transparent;
  margin: 5px 0.7em;
  &:nth-of-type(1) {
    margin-left: 0;
  }
`;

function Cast({ cast }) {
  return (
    <div>
      <div>Cast:</div>
      {cast.map((item: IMovieCast) => (
        <Img
          key={item.id}
          alt={item.name}
          title={item.name}
          src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
        />
      ))}
    </div>
  );
}

export default Cast;
