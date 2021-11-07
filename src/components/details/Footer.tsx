import { useHistory } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  display: flex;
`;

const Button = styled.a`
  display: inline-block;
  cursor: pointer;
  color: black;
  text-decoration: none;
  background: #efefef;
  padding: 10px 15px;
  margin-right: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #383786;
    color: white;
  }
`;

function Footer({ imdb_id, homepage, youtube_key }) {
  const history = useHistory();

  function onBack() {
    // reset movie detail
    history.push("/");
  }

  return (
    <FooterContainer>
      <LeftContainer>
        <Button target="_blank" href={`https://www.imdb.com/title/${imdb_id}`}>
          IMDB
        </Button>
        <Button
          target="_blank"
          href={`https://www.youtube.com/watch?v=${youtube_key}`}
        >
          Trailer
        </Button>
        <Button target="_blank" href={`https://www.imdb.com/title/${homepage}`}>
          Website
        </Button>
      </LeftContainer>
      <RightContainer>
        <Button onClick={onBack}>Back</Button>
      </RightContainer>
    </FooterContainer>
  );
}

export default Footer;
