import styled from "styled-components";
import { Link } from "react-router-dom";

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

const LinkButton = styled(Link)`
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

function Footer({ imdb_id, homepage }) {
  return (
    <FooterContainer>
      <LeftContainer>
        <Button target="_blank" href={`https://www.imdb.com/title/${imdb_id}`}>
          IMDB
        </Button>
        <Button target="_blank" href={`https://www.imdb.com/title/${imdb_id}`}>
          Trailer
        </Button>
        <Button target="_blank" href={`https://www.imdb.com/title/${homepage}`}>
          Website
        </Button>
      </LeftContainer>
      <RightContainer>
        <LinkButton to="/">Back</LinkButton>
      </RightContainer>
    </FooterContainer>
  );
}

export default Footer;
