import { useContext, useRef } from "react";
import styled from "styled-components";
import { loadPopularMovies } from "../../context/actions/movies";
import { DispatchContext } from "../../context/GlobalState";
import { useHistory } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 64px;
  color: #fff;
  background-color: #3f51b5;
`;

const Form = styled.form`
  margin: auto;
  max-width: 400px;
  height: 40px;
  display: flex;
  padding: 0 5px;
  align-items: center;
`;

const Input = styled.input`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 1px solid #2d9fd9;
  color: #a0d18c;
  width: 250px;
  height: 40px;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1px solid #a0d18c;
    color: #2d9fd9;
  }
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  outline: none;
  margin-left: -35px;
  &:hover {
    cursor: pointer;
  }
`;

function NavBar() {
  const dispatch = useContext(DispatchContext);
  const history = useHistory();
  const inputRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    search(inputRef.current.value);
  }

  async function search(query) {
    if (location.pathname !== "/") {
      // re route to main page
      history.push("/");
    }
    const url = query.length
      ? `https://api.themoviedb.org/3/search/movie?api_key=4e0d07555e20e0345f6bd12869b2604e&query=${query}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=4e0d07555e20e0345f6bd12869b2604e&page=1`;
    const movies = await fetch(url).then((res) => res.json());
    dispatch(loadPopularMovies(movies));
  }

  return (
    <NavbarContainer>
      <Form onSubmit={onSubmit}>
        <Input type="text" ref={inputRef} placeholder="Search Movie" />
        <Button className="searchIcon">
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </Button>
      </Form>
    </NavbarContainer>
  );
}

export default NavBar;
